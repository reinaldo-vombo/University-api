import { z } from 'zod';

export const createCoursePriceZodSchema = z.object({
  body: z.object({
    price: z.number({
    required_error: 'Preço é obrigatorio',
    }),
    courseId: z.string({
      required_error: 'É obrigatorio selecionar o curso',
    }),
  }),
});

export const updateCoursePriceZodSchema = z.object({
  body: z.object({
    price: z.number({
      required_error: 'Preço é obrigatorio',
    }),
    courseId: z.string({
      required_error: 'É obrigatorio selecionar o curso',
    }),
  }),
});
