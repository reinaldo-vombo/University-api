import express from 'express';
import { ENUM_USER_ROLE } from '../../enums/user';
import authGuard from '../../middlewares/authGuard';
import queryParams from '../../middlewares/queryParams';
import validateRequest from '../../middlewares/validateRequest';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';
import {
  createSemesterPaymentZodSchema,
  createReceiptZodSchema,
  approvedReceiptZodSchema,
} from './semesterPayment.validation';
import { uploadFiles } from '../../middlewares/upload';

const router = express.Router();
const upload = uploadFiles('uploads/payments');

router.post(
  '/reference',
  upload.fields([{ name: 'receptUrl', maxCount: 1 }]),
  authGuard(ENUM_USER_ROLE.STUDENT),
  validateRequest(createSemesterPaymentZodSchema),
  StudentSemesterPaymentController.createSemesterPaymentWithPayment
);

router.get(
  '/',
  queryParams,
  authGuard(ENUM_USER_ROLE.STUDENT),
  StudentSemesterPaymentController.getAllSemesterPaymentWithPayment
);

router.post(
  '/receipt',
  authGuard(ENUM_USER_ROLE.STUDENT),
  validateRequest(createReceiptZodSchema),
  StudentSemesterPaymentController.createSemesterPaymentWithReceipt
);

router.put(
  '/',
  authGuard(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ACCOUNTANT
  ),
  StudentSemesterPaymentController.approvedReceipt
);

export const SemesterPaymentRoutes = router;
