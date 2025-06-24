// import { Prisma } from '../../generated/prisma';

// type PayloadProps = {
//   studentId: string;
//   paymentRecipt: string | null;
//   academicSemesterId: string;
//   totalPaymentAmount: number;
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
//   {
//     studentId,
//     academicSemesterId,
//     totalPaymentAmount,
//     paymentRecipt,
//   }: PayloadProps
// ) => {
//   const isExist = await tx.studentSemesterPayment.findFirst({
//     where: {
//       studentId,
//       academicSemesterId,
//     },
//   });

//   if (!isExist) {
//     const now = new Date();
//     const baseAmount = totalPaymentAmount;
//     const lateFee = calculateLateFee(baseAmount, now);
//     const totalPayment = baseAmount + lateFee;

//     const data = {
//       studentId,
//       academicSemesterId,
//       baseAmount,
//       lateFee,
//       paymentRecipt,
//       totalPayment,
//       paymentMonth: now.getMonth() + 1,
//       paymentYear: now.getFullYear(),
//     };

//     await tx.studentSemesterPayment.create({ data });
//   }
// };

// export const studentSemesterPaymentService = {
//   createSemesterPayment,
// };
import { Prisma } from '../../generated/prisma';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

type PayloadProps = {
  studentId: string;
  academicSemesterId: string;
  paymentRecipt: string | null;
};

const calculateLateFee = (baseAmount: number, date: Date): number => {
  const day = date.getDate();
  if (day <= 10) return 0;

  const weekLate = Math.floor((day - 11) / 7) + 1; // +5% per week after day 10
  const feePercent = 5 * weekLate;
  return Math.floor((baseAmount * feePercent) / 100);
};

const createSemesterPayment = async (
  tx: Prisma.TransactionClient,
  { studentId, academicSemesterId, paymentRecipt }: PayloadProps
) => {
  const isExist = await tx.studentSemesterPayment.findFirst({
    where: {
      studentId,
      academicSemesterId,
    },
  });

  if (isExist) return; // payment already created

  // 1. Buscar o aluno com curso relacionado
  const student = await tx.student.findUnique({
    where: { id: studentId },
    include: {
      academicDepartment: {
        include: {
          courses: {
            include: {
              coursePricing: true,
            },
          },
        },
      },
    },
  });

  if (!student) {
    throw new Error(FLASH_MESSAGE.STUDENT_NOT_FOUND);
  }

  // 2. Encontrar o curso do estudante
  const course = await tx.course.findFirst({
    where: {
      academicDepartmentId: student.academicDepartmentId,
    },
    include: {
      coursePricing: true,
    },
  });

  if (!course || !course.coursePricing) {
    throw new Error('Curso ou preço do curso não encontrado');
  }

  const now = new Date();
  const baseAmount = course.coursePricing.price;
  const lateFee = calculateLateFee(baseAmount, now);
  const totalPayment = baseAmount + lateFee;

  const data = {
    studentId,
    academicSemesterId,
    baseAmount,
    lateFee,
    paymentRecipt,
    totalPayment,
    paymentMonth: now.getMonth() + 1,
    paymentYear: now.getFullYear(),
  };

  await tx.studentSemesterPayment.create({ data });
};

export const studentSemesterPaymentService = {
  createSemesterPayment,
};

