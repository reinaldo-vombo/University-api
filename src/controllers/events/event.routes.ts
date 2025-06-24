import express from 'express';
import { EventsController } from './event.controller';
import {
  createEventZodSchema,
} from './event.validation';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLE } from '../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import queryParams from '../../middlewares/queryParams';

const router = express.Router();

router.post(
  '/',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createEventZodSchema),
  EventsController.createEvent
);

router.get('/', queryParams, EventsController.getAllEvents);

router.get('/:id', EventsController.getSingleEvent);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createEventZodSchema),
  EventsController.updateEvent
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  EventsController.deleteEvent
);

export const EventsRoutes = router;
