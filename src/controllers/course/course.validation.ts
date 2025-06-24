import { z } from "zod";

export const createCourseZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    code: z.string({
      required_error: "Code is required",
    }),
    credits: z.number({
      required_error: "Credits is required",
    }),
    academicDepartmentId: z.string({
    required_error: 'Departamento acadêmico é obrigatorio',
    }),
    durationInYears: z.number({
      required_error: 'O ano de duração é obrigatorio',
    }),
    yearLevel: z.enum(['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'],).optional(),
    shift: z.enum(['Morning', 'Afternoon', 'Evening'],).optional(),
  }),
});

export const updateCourseZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    code: z.string().optional(),
    academicDepartmentId: z.string().optional(),
    durationInYears: z.number().optional(),
    credits: z.number().optional(),
    yearLevel: z.enum(['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'],).optional(),
    shift: z.enum(['MORNING', 'AFTERNOON', 'EVENING'],).optional(),
  }),
});

export const assignRemoveFacultiesZodSchema = z.object({
  body: z.object({
    faculties: z.array(z.string(), {
      required_error: "Faculties Are Required",
    }),
  }),
});