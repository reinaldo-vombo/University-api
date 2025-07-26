import { AdmitionExameRegistration } from '../../generated/prisma';
import asyncHandler from '../../shared/asyncHandler';
import { prisma } from '../../shared/prisma';
import sendResponse from '../../shared/sendResponse';
import { saveUploadedFiles } from '../../utils/saveUploadedFiles';
import { AdmitionExameService } from './admitionExame.service';
import httpStatus from 'http-status';

const createAdmitionExameRegistration = asyncHandler(async (req, res) => {
  const {
    applicantName,
    exameDate,
    phoneNumber,

    departmentId,
    documentUrl,
    paymentReciptUrl,
  } = req.body;
  const name: string = applicantName;

  const exitenAplicant = await prisma.admitionExameRegistration.findUnique({
    where: {
      applicantName: name,
    },
  });

  if (exitenAplicant) {
    return sendResponse(res, {
      statusCode: httpStatus.IM_USED,
      success: true,
      message: 'Já existe um canditado com esse nome',
      data: [],
    });
  }
  const files = req.files as {
    document?: Express.Multer.File[];
    paymentRecipt?: Express.Multer.File[];
  };

  const documentPath = files?.document?.[0]
    ? await saveUploadedFiles(files.document[0])
    : null;

  const paymentPath = files?.paymentRecipt?.[0]
    ? await saveUploadedFiles(files.paymentRecipt[0])
    : null;

  const requestbody: any = {
    ...req.body,
    document: documentPath || documentUrl,
    paymentRecipt: paymentPath || paymentReciptUrl,
  };
  const result =
    await AdmitionExameService.createAdmitionExameRegistration(requestbody);

  sendResponse<AdmitionExameRegistration>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Canditado registrado com sucesso',
    data: result,
  });
});

const getAllAdmitionExameRegistration = asyncHandler(async (req, res) => {
  const { data } = await AdmitionExameService.getAllAdmitionExameRegistration();

  sendResponse<AdmitionExameRegistration[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Todos os exames retornados com sucesso',
    data,
  });
});
const updateSingleCandidate = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const result = await AdmitionExameService.updateSingleCandidate(id, req.body);
  sendResponse<AdmitionExameRegistration>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dados atualizado',
    data: result,
  });
});
const getSingleCandidate = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const result = await AdmitionExameService.getSingleCandidate(id);
  sendResponse<AdmitionExameRegistration>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dados recuperado com sucesso',
    data: result,
  });
});
export const AdmitionExameController = {
  createAdmitionExameRegistration,
  getAllAdmitionExameRegistration,
  updateSingleCandidate,
  getSingleCandidate,
};
