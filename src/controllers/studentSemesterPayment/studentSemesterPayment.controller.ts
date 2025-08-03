import { Payment, StudentSemesterPayment } from '../../generated/prisma';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';
import httpStatus from 'http-status';

const createSemesterPaymentWithPayment = asyncHandler(async (req, res) => {
  const result = await StudentSemesterPaymentService.semesterPaymentWithPayment(
    req.body
  );

  sendResponse<StudentSemesterPayment>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Pagamento efectuado',
    data: result,
  });
});
const createSemesterPaymentWithReceipt = asyncHandler(async (req, res) => {
  const result = await StudentSemesterPaymentService.semesterPaymentWithReceipt(
    req.body
  );

  sendResponse<Payment>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Recibo do pagamento enviado',
    data: result,
  });
});
const getAllSemesterPaymentWithPayment = asyncHandler(async (req, res) => {
  const result = await StudentSemesterPaymentService.getAllPayments(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Lista de pagamentos',
    data: result,
  });
});
const approvedReceipt = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await StudentSemesterPaymentService.approvedReceipt(
    req.body,
    id
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Pagamento aprovado com sucesso',
    data: result,
  });
});

export const StudentSemesterPaymentController = {
  createSemesterPaymentWithPayment,
  createSemesterPaymentWithReceipt,
  getAllSemesterPaymentWithPayment,
  approvedReceipt,
};
