import { z } from 'zod';

export const createUserZodSchema = z.object({
  body: z.object({
   name: z.string().min(1, {
      message: 'O nome deve conter no minimo 5 caracteres'
   }),
   avatar: z.string().optional(),
   email: z.string().email(),
   role: z.enum([
      'super_admin',
      'admin',
      'student',
      'faculty',
      'accountant',
      'editor',
      'department_head',
   ]),
  }),
});

export const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    role: z.enum([
      'super_admin',
      'admin',
      'student',
      'faculty',
      'accountant',
      'editor',
      'department_head',
   ]),
    avatar: z.string().optional()
  }),
});


