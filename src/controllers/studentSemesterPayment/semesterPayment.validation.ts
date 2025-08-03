import { z } from 'zod';

export const createSemesterPaymentZodSchema = z.object({
  body: z.object({
    studentId: z.string({
      required_error: 'studentId é obrigatorio',
    }),
    referenceNumber: z.string({
      required_error: 'Nùmero de referencia é obrigatorio',
    }),
    academicSemesterId: z.string({
      required_error: 'Academic semester is required',
    }),
  }),
});

export const approvedReceiptZodSchema = z.object({
  body: z.object({
    paymentId: z.string({
      required_error: 'paymentId é obrigatorio',
    }),
    approved: z.boolean(),
    status: z.enum(['APROVE', 'PENDING', 'DENIDE']),
    amount: z.number({
      required_error: 'Valor é obrigatorio',
    }),
    message: z.string().optional(),
    studentNumber: z.string().optional(),
  }),
});
export const createReceiptZodSchema = z.object({
  body: z.object({
    receptUrl: z.string().url({
      message: 'Url do pagamento é obrigatorio',
    }),
  }),
});
