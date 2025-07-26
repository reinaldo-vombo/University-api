import { Course, CourseFaculty } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { CourseService } from './course.service';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

const createCourse = asyncHandler(async (req, res) => {
  const result = await CourseService.createCourseService(req.body);

  sendResponse<Course>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: FLASH_MESSAGE.COURSE_CREATE,
    data: result,
  });
});

const getAllCourse = asyncHandler(async (req, res) => {
  const { data, meta } = await CourseService.getAllCourseService(
    req.queryParams
  );
  sendResponse<Course[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    meta,
    data,
  });
});

const getSingleCourse = asyncHandler(async (req, res) => {
  const result = await CourseService.getSingleCourseService(req.params.id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_NOT_FOUND);
  }

  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  });
});

const updateCourse = asyncHandler(async (req, res) => {
  const result = await CourseService.updateCourseService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_NOT_FOUND);
  }

  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.COURSE_UPDATE,
    data: result,
  });
});

const deleteCourse = asyncHandler(async (req, res) => {
  const result = await CourseService.deleteCourseService(req.params.id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_NOT_FOUND);
  }

  sendResponse<Course>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.COURSE_DELETE,
    data: result,
  });
});

const assignFaculties = asyncHandler(async (req, res) => {
  console.log(req.body.faculties);
  
  const result = await CourseService.assignFacultiesService(
    req.params.id,
    req.body.faculties
  );

  sendResponse<CourseFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.FACULTIES_ASSIED,
    data: result,
  });
});

const removeFaculties = asyncHandler(async (req, res) => {
  const result = await CourseService.removeFacultiesService(
    req.params.id,
    req.body.faculties
  );

  if (!result.count) {
    throw new ApiError(httpStatus.BAD_REQUEST, FLASH_MESSAGE.FACULTIES_NOT_ASSIED);
  }

  sendResponse<CourseFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.FACULTIES_REMOVED,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
  assignFaculties,
  removeFaculties,
};
