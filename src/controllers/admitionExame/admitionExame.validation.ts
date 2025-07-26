import { z } from 'zod';

export const createadmitionExameZodSchema = z.object({
  body: z.object({
    applicantName: z.string({ required_error: 'Primero nome é obrigatorio' }),
    phoneNumber: z.string({
      required_error: 'Número de telefone é obrigatorio',
    }),
    email: z.string().email(),
    documentUrl: z.string().url().optional(),
    paymentReciptUrl: z.string().url().optional(),
    exameDate: z.preprocess(
      (val) =>
        typeof val === 'string' || val instanceof Date
          ? new Date(val)
          : undefined,
      z.date({ required_error: 'Data do exame é obrigatorio' })
    ),
  }),
});
