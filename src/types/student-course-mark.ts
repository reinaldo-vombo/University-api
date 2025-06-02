import { Prisma } from "../generated/prisma";

export type UpdateStudentMarkInput = {
   studentId: string;
   academicSemesterId: string;
   courseId: string;
   examField: keyof Pick<
     Prisma.StudentEnrolledCourseMarkUpdateInput,
     'exam1' | 'exam2' | 'exam3' | 'exam4' | 'exam5' | 'exam6' | 'finalExam'
   >;
   marks: number;
 };