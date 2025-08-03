import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';
import { AdmitionExameRegistration } from '../../generated/prisma';
import { PaymentsService } from './payments.service';
import { TSigleReference } from './types';

const paymentByReference = asyncHandler(async (req, res) => {
  const data = await PaymentsService.paymentByReference(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Pagamento concluido `,
    data: data,
  });
});

export const PaymentsController = {
  paymentByReference,
};
