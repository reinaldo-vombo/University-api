import { Prisma } from '../generated/prisma';

export type UpdateStudentMarkInput = {
  studentId: string;
  academicSemesterId: string;
  courseId: string;
  examField: keyof Pick<
    Prisma.StudentEnrolledCourseMarkUpdateInput,
    'frequencyExam' | 'resourceExam' | 'recoveryExam' | 'continuousAssessments'
  >;
  marks: number;
};
