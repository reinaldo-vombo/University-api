import express from 'express';
import { ENUM_USER_ROLE } from '../../enums/user';
import authGuard from '../../middlewares/authGuard';
import { createMessageZodSchema } from './notifications.validation';
import validateRequest from '../../middlewares/validateRequest';
import { SendMessageController } from './notifications.controller';

const router = express.Router();

router.post(
  '/',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createMessageZodSchema),
  SendMessageController.sendMessage
);

export const NotificationsRoutes = router;
