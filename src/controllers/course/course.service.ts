/* eslint-disable @typescript-eslint/no-explicit-any */
import { Course, CourseFaculty } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import getPrismaQuery from '../../helpers/getPrismaQuery';
import { IQueryParams } from '../../interfaces/common';
import { prisma } from '../../shared/prisma';
import { ICourseProps } from './course.interface';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

const createCourseService = async (
  info: ICourseProps
): Promise<Course | null | undefined> => {
  const { preRequisiteCourses, ...rest } = info;

  const newCourse = await prisma.$transaction(async (tx) => {
    const result = await tx.course.create({
      data: {
        ...rest,
      },
    });

    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, FLASH_MESSAGE.COURSE_UNEXPECTED_ERROR);
    }

    if (preRequisiteCourses?.length) {
      for (const pre of preRequisiteCourses) {
        await tx.courseToPreRequisite.create({
          data: {
            courseId: result.id,
            preRequisiteId: pre.courseId,
          },
        });
      }
    }

    return result;
  });

  if (newCourse) {
    const result = await prisma.course.findUnique({
      where: { id: newCourse.id },
      include: {
        academicDepartment: true, // ✅ include department
        preRequisite: {
          include: { preRequisite: true },
        },
        preRequisiteFor: {
          include: { course: true },
        },
      },
    });

    return result;
  }

  throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to create course');
};


const getAllCourseService = async (options: Partial<IQueryParams>) => {
  const query = getPrismaQuery(options, ['title', 'code', 'credits']);

  const result = await prisma.course.findMany({
    where: query.where,
    skip: query.skip,
    take: query.take,
    orderBy: query.orderBy,
    include: {
      academicDepartment: {
        select: {
          title: true,
        },
      }, // ✅
      preRequisite: {
        include: { preRequisite: true },
      },
      coursePricing: {
        select: {
          price: true, 
        },
      }, 
      courseDisciplines: {
        include: {
          discipline: true, 
        },
      },  
      preRequisiteFor: {
        include: { course: true },
      },
    },
  });

  const total = await prisma.course.count();

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


const getSingleCourseService = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.findUnique({
    where: { id },
    include: {
      academicDepartment: true, // ✅
      preRequisite: {
        include: { preRequisite: true },
      },
      preRequisiteFor: {
        include: { course: true },
      },
    },
  });

  return result;
};


const updateCourseService = async (
  id: string,
  payload: ICourseProps
): Promise<Course | null> => {
  const { preRequisiteCourses, ...rest } = payload;

  await prisma.$transaction(async (tx) => {
    const result = await tx.course.update({
      where: { id },
      data: rest,
    });

    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Unable to update course');
    }

    if (preRequisiteCourses?.length) {
      const deletePreRequisite = preRequisiteCourses.filter(p => p.isDeleted);
      if (deletePreRequisite.length) {
        await tx.courseToPreRequisite.deleteMany({
          where: {
            courseId: id,
            preRequisiteId: { in: deletePreRequisite.map(p => p.courseId) },
          },
        });
      }

      const addPreRequisite = preRequisiteCourses.filter(p => !p.isDeleted);
      if (addPreRequisite.length) {
        for (const pre of addPreRequisite) {
          await tx.courseToPreRequisite.create({
            data: {
              courseId: id,
              preRequisiteId: pre.courseId,
            },
          });
        }
      }
    }

    return result;
  });

  const response = await prisma.course.findUnique({
    where: { id },
    include: {
      academicDepartment: true, // ✅
      preRequisite: {
        include: { preRequisite: true },
      },
      preRequisiteFor: {
        include: { course: true },
      },
    },
  });

  return response;
};


const deleteCourseService = async (id: string): Promise<Course | null> => {
  const result = await prisma.course.delete({
    where: {
      id,
    },
  });

  return result;
};

const assignFacultiesService = async (
  id: string,
  payload: string[]
): Promise<CourseFaculty[] | null> => {
  await prisma.courseFaculty.createMany({
    data: payload.map((facultyId: string) => ({
      courseId: id,
      facultyId,
    })),
  });

  const response = await prisma.courseFaculty.findMany({
    where: {
      courseId: id,
    },
    include: {
      faculty: true,
    },
  });
  return response;
};

const removeFacultiesService = async (id: string, payload: string[]) => {
  const result = await prisma.courseFaculty.deleteMany({
    where: {
      AND: [{ courseId: id }, { facultyId: { in: payload } }],
    },
  });

  return result;
};

export const CourseService = {
  createCourseService,
  getAllCourseService,
  getSingleCourseService,
  updateCourseService,
  deleteCourseService,
  assignFacultiesService,
  removeFacultiesService,
};
