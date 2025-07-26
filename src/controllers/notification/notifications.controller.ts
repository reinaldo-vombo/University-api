import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';
import { SendMessageService } from './notifications.service';
import { AdmitionExameRegistration } from '../../generated/prisma';

const sendMessage = asyncHandler(async (req, res) => {
  const data = await SendMessageService.sendMessage(req.body);

  sendResponse<AdmitionExameRegistration[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Menssagem foi enviada a ${data?.applicantName}`,
    data: [],
  });
});

export const SendMessageController = {
  sendMessage,
};
