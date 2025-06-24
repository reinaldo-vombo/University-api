import { AcademicSemester } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

const createAcademicSemester = asyncHandler(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemester(req.body);

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: FLASH_MESSAGE.SEMESTER_CREATE,
    data: result,
  });
});

const getAllAcademicSemester = asyncHandler(async (req, res) => {
  const { data, meta } =
    await AcademicSemesterService.getAllAcademicSemesterService(
      req.queryParams
    );
  sendResponse<AcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester retrieved successfully',
    meta,
    data,
  });
});

const getSingleAcademicSemester = asyncHandler(async (req, res) => {
  const result = await AcademicSemesterService.getSingleAcademicSemesterService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_CREATE);
  }

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester retrieved successfully',
    data: result,
  });
});

const updateAcademicSemester = asyncHandler(async (req, res) => {
  const result = await AcademicSemesterService.updateAcademicSemesterService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_CREATE);
  }

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.SEMESTER_UPDATE,
    data: result,
  });
});

const deleteAcademicSemester = asyncHandler(async (req, res) => {
  const result = await AcademicSemesterService.deleteAcademicSemesterService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_CREATE);
  }

  sendResponse<AcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.SEMESTER_DELETE,
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester,
};
