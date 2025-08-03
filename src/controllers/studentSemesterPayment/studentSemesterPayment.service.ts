// import { Prisma } from '../../generated/prisma';
// import { FLASH_MESSAGE } from '../../helpers/flashMessage';

// type PayloadProps = {
//   studentId: string;
//   academicSemesterId: string;
//   paymentRecipt: string | null;
// };

// const calculateLateFee = (baseAmount: number, date: Date): number => {
//   const day = date.getDate();
//   if (day <= 10) return 0;

//   const weekLate = Math.floor((day - 11) / 7) + 1; // +5% per week after day 10
//   const feePercent = 5 * weekLate;
//   return Math.floor((baseAmount * feePercent) / 100);
// };

// const createSemesterPayment = async (
//   tx: Prisma.TransactionClient,
//   { studentId, academicSemesterId, paymentRecipt }: PayloadProps
// ) => {
//   const isExist = await tx.studentSemesterPayment.findFirst({
//     where: {
//       studentId,
//       academicSemesterId,
//     },
//   });

//   if (isExist) return; // payment already created

//   // 1. Buscar o aluno com curso relacionado
//   const student = await tx.student.findUnique({
//     where: { id: studentId },
//     include: {
//       academicDepartment: {
//         include: {
//           courses: {
//             include: {
//               coursePricing: true,
//             },
//           },
//         },
//       },
//     },
//   });

//   if (!student) {
//     throw new Error(FLASH_MESSAGE.STUDENT_NOT_FOUND);
//   }

//   // 2. Encontrar o curso do estudante
//   const course = await tx.course.findFirst({
//     where: {
//       academicDepartmentId: student.academicDepartmentId,
//     },
//     include: {
//       coursePricing: true,
//     },
//   });

//   if (!course || !course.coursePricing) {
//     throw new Error('Curso ou preço do curso não encontrado');
//   }

//   const now = new Date();
//   const baseAmount = course.coursePricing.price;
//   const lateFee = calculateLateFee(baseAmount, now);
//   const totalPayment = baseAmount + lateFee;

//   const data = {
//     studentId,
//     academicSemesterId,
//     baseAmount,
//     lateFee,
//     paymentRecipt,
//     totalPayment,
//     paymentMonth: now.getMonth() + 1,
//     paymentYear: now.getFullYear(),
//   };

//   // await tx.studentSemesterPayment.create({ data });
// };

// export const studentSemesterPaymentService = {
//   createSemesterPayment,
// };

import { prisma } from '../../shared/prisma';
import { calculateLateFee } from './semesterPaymentUtils';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';
import { createPaymentWithReference } from '../../helpers/utils';
import { handleError } from '../../errors/error-hndler';
import httpStatus from 'http-status';
import { Payment, StudentSemesterPayment } from '../../generated/prisma';
import { TApprovedPayment } from './type';
import { sendWhatsAppMessage } from '../../helpers/ultramsg';

type CreateSemesterPaymentWithPaymentProps = {
  studentId: string;
  academicSemesterId: string;
  referenceNumber: string;
};

const semesterPaymentWithPayment = async ({
  studentId,
  academicSemesterId,
  referenceNumber,
}: CreateSemesterPaymentWithPaymentProps): Promise<StudentSemesterPayment> => {
  return await prisma.$transaction(async (tx) => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    // 🚫 Verifica se já existe pagamento neste mês/ano para este semestre
    const existingPayment = await tx.studentSemesterPayment.findFirst({
      where: {
        studentId,
        academicSemesterId,
        paymentMonth: currentMonth,
        paymentYear: currentYear,
      },
    });

    if (existingPayment) {
      const errorResponse = handleError(
        'Já existe pagamento para este mês e semestre.',
        null,
        httpStatus.FOUND
      );
      throw new Error(JSON.stringify(errorResponse));
    }

    // 📚 Buscar dados do estudante e curso
    const student = await tx.student.findUnique({
      where: { id: studentId },
      include: {
        academicDepartment: {
          include: {
            courses: {
              include: { coursePricing: true },
            },
          },
        },
      },
    });

    if (!student) throw new Error(FLASH_MESSAGE.STUDENT_NOT_FOUND);

    const course = student.academicDepartment.courses[0];
    const pricing = course?.coursePricing;

    if (!pricing) throw new Error('Preço do curso não encontrado.');

    const baseAmount = Math.floor(pricing.price);
    const lateFee = calculateLateFee(baseAmount, now);
    const totalPayment = baseAmount + lateFee;

    // 🔁 Criar pagamento
    const payment = await tx.payment.create({
      data: {
        totalAmount: totalPayment,
        status: 'PENDING',
        method: 'EXPRESS',
        paymentType: 'REFERENCE',
      },
    });

    // 📦 Chamar API externa (AppyPay)
    const payload = await createPaymentWithReference(
      referenceNumber,
      'semester_payment'
    );

    if (!payload?.references?.length) {
      throw new Error('Referência não encontrada na API externa.');
    }

    const ref = payload.references[0];

    // 🚫 Verificar se o valor pago é suficiente
    if (ref.amount < totalPayment) {
      throw new Error(
        `Valor pago (${ref.amount}) é inferior ao total devido (${totalPayment}).`
      );
    }

    // 💾 Criar StudentSemesterPayment
    const semesterPayment = await tx.studentSemesterPayment.create({
      data: {
        studentId,
        academicSemesterId,
        baseAmount,
        lateFee,
        totalPayment,
        paymentId: payment.id,
        paymentMonth: currentMonth,
        paymentYear: currentYear,
      },
    });

    // 💾 Criar PaymentReference
    await tx.paymentReference.create({
      data: {
        reference: ref.referenceNumber,
        code: ref.code,
        message: ref.message,
        paymentId: payment.id,
      },
    });

    // ✅ Atualizar Payment para "COMPLETED"
    await tx.payment.update({
      where: { id: payment.id },
      data: {
        status: 'PAID',
        paymentRecipt: ref.referenceNumber,
      },
    });

    return semesterPayment;
  });
};

const semesterPaymentWithReceipt = async (
  receptUrl: string
): Promise<Payment> => {
  const payment = await prisma.payment.create({
    data: {
      paymentRecipt: receptUrl,
      status: 'PENDING',
      paymentType: 'RECEIPT',
      method: 'INVOICE',
      totalAmount: 0,
      approved: false,
    },
  });

  return payment;
};

const approvedReceipt = async (info: TApprovedPayment, userId: string) => {
  const { paymentId, approved, status, amount, message, studentNumber } = info;
  if (message) {
    await sendWhatsAppMessage(studentNumber, message);
  }
  const payment = await prisma.payment.update({
    where: { id: paymentId },
    data: {
      totalAmount: amount,
      approved,
      status,
    },
  });
  if (message) {
    await sendWhatsAppMessage(studentNumber, message);
  }
  return payment;
};

const getAllPayments = async (semesterId: string) => {
  const payments = await prisma.studentSemesterPayment.findMany({
    where: {
      academicSemesterId: semesterId,
    },
    include: {
      payment: {
        include: {
          PaymentReference: true,
        },
      },
      academicSemester: {
        include: {
          students: true,
          courseDisciplines: true,
        },
      },
    },
  });

  return payments.map((payment) => {
    const isReceiptPayment = payment.payment.method === 'INVOICE';

    return {
      ...payment,
      paymentMethod: payment.payment.method,
      isReceiptPayment,
      reciptImage: isReceiptPayment ? payment.payment.paymentRecipt : null,
    };
  });
};

export const StudentSemesterPaymentService = {
  semesterPaymentWithPayment,
  semesterPaymentWithReceipt,
  approvedReceipt,
  getAllPayments,
};
