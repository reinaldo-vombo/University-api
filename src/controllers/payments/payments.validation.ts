import { z } from 'zod';

export const createReferenceZodSchema = z.object({
  body: z.object({
    referenceNumber: z.string({
      required_error: 'Número de referencia é obrigatorio',
    }),
  }),
});
