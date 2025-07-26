import { CourseFaculty, Faculty } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { FacultyService } from './faculty.service';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';
import { generatePassword, generateUniqueFacultyId } from '../../helpers/utils';

const createFaculty = asyncHandler(async (req, res) => {
  const generatedPassword = generatePassword(12)
  const reqBody = {
    ...req.body,
    password: generatedPassword,
    facultyId: await generateUniqueFacultyId()
  }
  console.log(reqBody);
  
  const result = await FacultyService.createFacultyService(reqBody);

  sendResponse<Faculty>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: FLASH_MESSAGE.FACULTY_CREATE,
    data: result,
  });
});

const getAllFaculty = asyncHandler(async (req, res) => {
  const { data, meta } = await FacultyService.getAllFacultyService(
    req.queryParams
  );
  sendResponse<Faculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty retrieved successfully',
    meta,
    data,
  });
});

const getSingleFaculty = asyncHandler(async (req, res) => {
  const result = await FacultyService.getSingleFacultyService(req.params.id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.FACULTY_NOT_FOUND);
  }

  sendResponse<Faculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty retrieved successfully',
    data: result,
  });
});

const updateFaculty = asyncHandler(async (req, res) => {
  const result = await FacultyService.updateFacultyService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.FACULTY_NOT_FOUND);
  }

  sendResponse<Faculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.FACULTY_UPDATE,
    data: result,
  });
});

const deleteFaculty = asyncHandler(async (req, res) => {
  const result = await FacultyService.deleteFacultyService(req.params.id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.FACULTY_NOT_FOUND);
  }

  sendResponse<Faculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.FACULTY_DELETE,
    data: result,
  });
});

const assignCourses = asyncHandler(async (req, res) => {
  const result = await FacultyService.assignCoursesService(
    req.params.id,
    req.body.courses
  );

  sendResponse<Faculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.COURSE_ASSIED,
    data: result,
  });
});

const removeCourses = asyncHandler(async (req, res) => {
  const result = await FacultyService.removeCoursesService(
    req.params.id,
    req.body.courses
  );

  if (!result.count) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      FLASH_MESSAGE.COURSE_NOT_REMOVED
    );
  }

  sendResponse<CourseFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.COURSE_NOT_REMOVED,
  });
});

const getFacultyCourses = asyncHandler(async (req, res) => {
  const userId = req.user?.id;
  const result = await FacultyService.getFacultyCoursesService(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty courses retrieved successfully',
    data: result,
  });
});

export const FacultyController = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  assignCourses,
  removeCourses,
  getFacultyCourses,
};
