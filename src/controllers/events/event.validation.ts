import { z } from "zod";

export const createEventZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    description: z.string({
      required_error: "description is required",
    }),
    color: z.string({
      required_error: "color is required",
    }),
    location: z.string({
      required_error: "color is required",
    }),
    required: z.boolean().optional(),
    date: z.date({
      required_error: "date is required",
    }),
  }),
});