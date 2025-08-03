import { prisma } from '../../shared/prisma';

/* eslint-disable @typescript-eslint/no-explicit-any */
const groupByAcademicSemester = (data: any) => {
  const groupData = data.reduce((result: any, course: any) => {
    const academicSemester = course.academicSemester;
    const academicSemesterId = academicSemester.id;

    const existingGroup = result.find(
      (group: any) => group.academicSemester.id === academicSemesterId
    );

    if (existingGroup) {
      existingGroup.completedCourses.push({
        id: course.id,
        createdAt: course.createdAt,
        updatedAt: course.updatedAt,
        courseId: course.courseId,
        studentId: course.studentId,
        grade: course.grade,
        point: course.point,
        totalMarks: course.totalMarks,
        course: course.course,
      });
    } else {
      result.push({
        academicSemester,
        completedCourses: [
          {
            id: course.id,
            createdAt: course.createdAt,
            updatedAt: course.updatedAt,
            courseId: course.courseId,
            studentId: course.studentId,
            grade: course.grade,
            point: course.point,
            totalMarks: course.totalMarks,
            course: course.course,
          },
        ],
      });
    }
    return result;
  }, []);
  return groupData;
};
const generateUniqueStudentNumber = async (): Promise<string> => {
  let unique = false;
  let studentNumber = '';
  const year = new Date().getFullYear();

  while (!unique) {
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    studentNumber = `${year}${randomPart}`;

    const existing = await prisma.student.findUnique({
      where: { studentId: studentNumber },
      select: { id: true },
    });

    if (!existing) unique = true;
  }

  return studentNumber;
};

export const StudentUtils = {
  groupByAcademicSemester,
  generateUniqueStudentNumber,
};
