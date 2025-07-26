import { z } from 'zod';

export const createMessageZodSchema = z.object({
  body: z.object({
    registrationId: z.string({
      required_error: 'Caditate ID is required',
    }),
    message: z.string({
      required_error: 'Message is required',
    }),
  }),
});
