import { z } from 'zod';

export const createDisciplineZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'O nome da disciplina é obrigatório',
    }),
    code: z.string({
      required_error: 'O código da disciplina é obrigatório',
    }),
    description: z.string().optional(),
    credits: z
      .number({
        required_error: 'O número de créditos é obrigatório',
      })
      .min(1, { message: 'Créditos devem ser maior que 0' }),
    minimumGradeToDismiss: z
      .number()
      .min(0, { message: 'A nota mínima não pode ser negativa' })
      .default(10),
  }),
});

export const updateDisciplineZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    code: z.string().optional(),
    description: z.string().optional(),
    credits: z.number().min(1).optional(),
    minimumGradeToDismiss: z.number().min(0).optional(),
  }),
});
