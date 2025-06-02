import { SemesterRegistrationStatus } from '../../generated/prisma';
import { z } from 'zod';

export const createSemesterRegistrationZodSchema = z.object({
  body: z.object({
    startDate: z.string({
      required_error: 'Start Date is required',
    }),
    endDate: z.string({
      required_error: 'End Date is required',
    }),
    // status: z.enum(["UPCOMING", "ONGOING", "ENDED"]).optional(),
    totalPayment: z
      .number({
        required_error: 'total Payment must be at least 0',
      })
      .min(0),
    academicSemesterId: z.string({
      required_error: 'academicSemesterId is required',
    }),
  }),
});

export const updateSemesterRegistrationZodSchema = z.object({
  body: z.object({
    startDate: z.string({}).optional(),
    endDate: z.string({}).optional(),
    status: z
      .enum(
        [...Object.values(SemesterRegistrationStatus)] as [string, ...string[]],
        {
          invalid_type_error: 'Invalid status',
        }
      )
      .optional(),
    totalPayment: z.number({}).min(0).optional(),
    academicSemesterId: z.string({}).optional(),
  }),
});

export const enrollOrWithdrawCourseZodSchema = z.object({
  body: z.object({
    offeredCourseId: z.string({
      required_error: 'Offered course id is required',
    }),
    offeredCourseSectionId: z.string({
      required_error: 'Offered course Section id is required',
    }),
  }),
});
