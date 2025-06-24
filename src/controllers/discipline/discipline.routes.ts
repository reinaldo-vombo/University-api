import express from 'express';
import { DisciplineController } from './discipline.controller';
import {
  createDisciplineZodSchema,
  updateDisciplineZodSchema,
} from './discipline.validation';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLE } from '../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import queryParams from '../../middlewares/queryParams';

const router = express.Router();

router.post(
  '/',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createDisciplineZodSchema),
  DisciplineController.createDicipline
);

router.get('/', queryParams, DisciplineController.getAllDisciplines);

router.get('/:id', DisciplineController.getSingleDisciplines);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(updateDisciplineZodSchema),
  DisciplineController.updateDiscipline
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  DisciplineController.deleteDiscipline
);

export const DisciplineRoutes = router;
