import express from 'express';
import { ENUM_USER_ROLE } from '../../enums/user';
import authGuard from '../../middlewares/authGuard';
import { createReferenceZodSchema } from './payments.validation';
import validateRequest from '../../middlewares/validateRequest';
import { PaymentsController } from './payments.controller';

const router = express.Router();

router.post(
  '/reference',
  validateRequest(createReferenceZodSchema),
  PaymentsController.paymentByReference
);

export const PaymentsRoutes = router;
