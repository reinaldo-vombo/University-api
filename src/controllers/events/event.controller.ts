import { Events } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { EventsService } from './event.service';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

const createEvent = asyncHandler(async (req, res) => {
  const result = await EventsService.createEventesService(req.body);

  sendResponse<Events>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: FLASH_MESSAGE.EVENT_CREATE,
    data: result,
  });
});

const getAllEvents = asyncHandler(async (req, res) => {
  const { data, meta } =
    await EventsService.getAllEventsService(
      req.queryParams
    );
  sendResponse<Events[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester retrieved successfully',
    meta,
    data,
  });
});

const getSingleEvent = asyncHandler(async (req, res) => {
  const result = await EventsService.getSingleEventsService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.EVENT_NOT_FOUND);
  }

  sendResponse<Events>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Event retrieved successfully',
    data: result,
  });
});

const updateEvent = asyncHandler(async (req, res) => {
  const result = await EventsService.updateEventsService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, FLASH_MESSAGE.EVENT_NOT_FOUND);
  }

  sendResponse<Events>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.EVENT_UPDATE,
    data: result,
  });
});

const deleteEvent = asyncHandler(async (req, res) => {
  const result = await EventsService.deleteEventsService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academic Semester not found');
  }

  sendResponse<Events>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.DISCIPLINE_DELETE,
    data: result,
  });
});

export const EventsController = {
  createEvent,
  getAllEvents,
  getSingleEvent,
  updateEvent,
  deleteEvent,
};
