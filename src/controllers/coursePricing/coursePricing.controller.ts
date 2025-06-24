import { CoursePricing } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { CoursePricingService } from './coursePricing.service';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

const createCoursePricing = asyncHandler(async (req, res) => {
  const result = await CoursePricingService.createCoursePricingService(req.body);

  sendResponse<CoursePricing>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: FLASH_MESSAGE.DISCIPLINE_CREATE,
    data: result,
  });
});

const getAllCoursePricing = asyncHandler(async (req, res) => {
  const { data, meta } =
    await CoursePricingService.getAllCoursePricingService(
      req.queryParams
    );
  sendResponse<CoursePricing[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course price retrieved successfully',
    meta,
    data,
  });
});

const getSingleCoursePricing = asyncHandler(async (req, res) => {
  const result = await CoursePricingService.getSingleCoursePricingService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_PRICE_NOT_FOUND);
  }

  sendResponse<CoursePricing>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course price retrieved successfully',
    data: result,
  });
});

const updateCoursePricing = asyncHandler(async (req, res) => {
  const result = await CoursePricingService.updateCoursePricingService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_PRICE_NOT_FOUND);
  }

  sendResponse<CoursePricing>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.COURSE_PRICE_UPDATE,
    data: result,
  });
});

const deleteCoursePricing = asyncHandler(async (req, res) => {
  const result = await CoursePricingService.deleteCoursePricingService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.COURSE_PRICE_NOT_FOUND);
  }

  sendResponse<CoursePricing>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.COURSE_PRICE_DELETE,
    data: result,
  });
});

export const CoursePricingController = {
  createCoursePricing,
  getAllCoursePricing,
  getSingleCoursePricing,
  updateCoursePricing,
  deleteCoursePricing,
};
