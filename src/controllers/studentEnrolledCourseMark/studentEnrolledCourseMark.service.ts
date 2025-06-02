import {
  ExamType,
  PrismaClient,
  StudentEnrolledCourseStatus,
} from '../../generated/prisma';
import {
  DefaultArgs,
  PrismaClientOptions,
} from '@prisma/client/runtime/library';
import getPrismaQuery from '../../helpers/getPrismaQuery';
import { IQueryParams } from '../../interfaces/common';
import { prisma } from '../../shared/prisma';
import {
  calculateCGPA,
  getGradeFromMarks,
} from './studentEnrolledCourseMark.utils';
import { Prisma } from '@prisma/client';
import { UpdateStudentMarkInput } from '../../types/student-course-mark';

type PayloadProps = {
  studentId: string;
  academicSemesterId: string;
  studentEnrolledCourseId: string;
};

const createStudentEnrolledCourseDefaultMark = async (
  tx: Prisma.TransactionClient,
  payload: PayloadProps
) => {
  const { studentId, academicSemesterId, studentEnrolledCourseId } = payload;
  const isExistMidterm = await tx.studentEnrolledCourseMark.findFirst({
    where: {
      studentId,
      academicSemesterId,
      studentEnrolledCourseId,
      examType: ExamType.MIDTERM,
    },
    select: {
      id: true,
    },
  });

  if (!isExistMidterm) {
    await tx.studentEnrolledCourseMark.create({
      data: {
        studentId,
        academicSemesterId,
        studentEnrolledCourseId,
        examType: ExamType.MIDTERM,
      },
    });
  }

  const isExistFinal = await tx.studentEnrolledCourseMark.findFirst({
    where: {
      studentId,
      academicSemesterId,
      studentEnrolledCourseId,
      examType: ExamType.FINAL,
    },
    select: {
      id: true,
    },
  });

  if (!isExistFinal) {
    await tx.studentEnrolledCourseMark.create({
      data: {
        studentId,
        academicSemesterId,
        studentEnrolledCourseId,
        examType: ExamType.FINAL,
      },
    });
  }
};

const getAllStudentEnrolledCourseMarkService = async (
  options: Partial<IQueryParams>
) => {
  const query = getPrismaQuery(options, ['id']);

  const result = await prisma.studentEnrolledCourse.findMany(query);
  const total = await prisma.studentEnrolledCourse.count();

  return {
    data: result,
    meta: {
      total,
      totalResult: result.length,
      totalPages: Math.ceil(total / (options.limit || 100)),
      currentPage: options.page || 1,
      limit: options.limit,
    },
  };
};

const updateStudentMarkService = async ({
  studentId,
  academicSemesterId,
  courseId,
  examField,
  marks,
}: UpdateStudentMarkInput) => {
  const studentEnrolledCourseMarks =
    await prisma.studentEnrolledCourseMark.findFirst({
      where: {
        studentId,
        academicSemesterId,
        studentEnrolledCourse: {
          courseId,
        },
      },
    });

  if (!studentEnrolledCourseMarks) {
    throw new Error('Student enrolled course mark not found');
  }

  const updateData: any = {
    [examField]: marks,
  };

  // Recalculate total marks after update
  const updated = await prisma.studentEnrolledCourseMark.update({
    where: {
      id: studentEnrolledCourseMarks.id,
    },
    data: updateData,
  });

  // Optionally recalculate totalMarks
  const totalMarks =
    updated.exam1 +
    updated.exam2 +
    updated.exam3 +
    updated.exam4 +
    updated.exam5 +
    updated.exam6 +
    updated.finalExam;

  await prisma.studentEnrolledCourseMark.update({
    where: { id: updated.id },
    data: { totalMarks },
  });

  return { ...updated, totalMarks };
};

const updateFinalMarkService = async ({
  studentId,
  academicSemesterId,
  courseId,
}: {
  studentId: string;
  academicSemesterId: string;
  courseId: string;
}) => {
  const studentEnrolledCourse = await prisma.studentEnrolledCourse.findFirst({
    where: {
      studentId,
      academicSemesterId,
      courseId,
    },
    select: {
      id: true,
    },
  });

  if (!studentEnrolledCourse) {
    throw new Error('Student enrolled course not found');
  }

  const studentEnrolledCourseMarks =
    await prisma.studentEnrolledCourseMark.findMany({
      where: {
        studentEnrolledCourseId: studentEnrolledCourse.id,
      },
    });

  if (!studentEnrolledCourseMarks.length) {
    throw new Error('Student enrolled course mark not found');
  }

  const marks = studentEnrolledCourseMarks[0]; // Only one record per course now

  if (!marks) throw new Error('No marks found for student.');

  const totalMarks = Math.ceil(
    marks.exam1 +
      marks.exam2 +
      marks.exam3 +
      marks.exam4 +
      marks.exam5 +
      marks.exam6 +
      marks.finalExam
  );

  const { grade, point } = getGradeFromMarks(totalMarks);

  await prisma.studentEnrolledCourse.update({
    where: {
      id: studentEnrolledCourse.id,
    },
    data: {
      totalMarks,
      grade,
      point,
      status: StudentEnrolledCourseStatus.COMPLETED,
    },
  });

  const grades = await prisma.studentEnrolledCourse.findMany({
    where: {
      studentId,
      status: StudentEnrolledCourseStatus.COMPLETED,
    },
    include: {
      course: true,
    },
  });

  const { cgpa, totalCompletedCredits } = calculateCGPA(grades);

  const studentAcademicInfo = await prisma.studentAcademicInfo.findFirst({
    where: {
      studentId,
    },
  });
  if (studentAcademicInfo) {
    await prisma.studentAcademicInfo.update({
      where: {
        id: studentAcademicInfo.id,
      },
      data: {
        cgpa,
        totalCompletedCredits,
      },
    });
  } else {
    await prisma.studentAcademicInfo.create({
      data: {
        studentId,
        cgpa,
        totalCompletedCredits,
      },
    });
  }

  return grades;
};

export const StudentEnrolledCourseMarkService = {
  createStudentEnrolledCourseDefaultMark,
  getAllStudentEnrolledCourseMarkService,
  updateStudentMarkService,
  updateFinalMarkService,
};
