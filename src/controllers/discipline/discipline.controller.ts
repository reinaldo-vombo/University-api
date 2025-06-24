import { Discipline } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { DisciplineService } from './discipline.service';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';

const createDicipline = asyncHandler(async (req, res) => {
  const result = await DisciplineService.createDicipline(req.body);

  sendResponse<Discipline>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: FLASH_MESSAGE.DISCIPLINE_CREATE,
    data: result,
  });
});

const getAllDisciplines = asyncHandler(async (req, res) => {
  const { data, meta } =
    await DisciplineService.getAllDisciplinesService(
      req.queryParams
    );
  sendResponse<Discipline[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester retrieved successfully',
    meta,
    data,
  });
});

const getSingleDisciplines = asyncHandler(async (req, res) => {
  const result = await DisciplineService.getSingleDisciplineService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'AcademicSemester not found');
  }

  sendResponse<Discipline>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester retrieved successfully',
    data: result,
  });
});

const updateDiscipline = asyncHandler(async (req, res) => {
  const result = await DisciplineService.updateDisciplineService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Desciplina não encontrado');
  }

  sendResponse<Discipline>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.DISCIPLINE_UPDATE,
    data: result,
  });
});

const deleteDiscipline = asyncHandler(async (req, res) => {
  const result = await DisciplineService.deleteDisciplineService(
    req.params.id
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Academic Semester not found');
  }

  sendResponse<Discipline>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.DISCIPLINE_DELETE,
    data: result,
  });
});

export const DisciplineController = {
  createDicipline,
  getAllDisciplines,
  getSingleDisciplines,
  updateDiscipline,
  deleteDiscipline,
};
