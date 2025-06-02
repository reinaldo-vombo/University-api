import express from 'express';
import { ENUM_USER_ROLE } from '../../enums/user';
import authGuard from '../../middlewares/authGuard';
import queryParams from '../../middlewares/queryParams';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import {
  assignRemoveFacultiesZodSchema,
  createCourseZodSchema,
  updateCourseZodSchema,
} from './course.validation';

const router = express.Router();

router.post(
  '/',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createCourseZodSchema),
  CourseController.createCourse
);

router.get('/', queryParams, CourseController.getAllCourse);
router.get('/:id', CourseController.getSingleCourse);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(updateCourseZodSchema),
  CourseController.updateCourse
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CourseController.deleteCourse
);

router.post(
  '/assign-faculties/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(assignRemoveFacultiesZodSchema),
  CourseController.assignFaculties
);

router.delete(
  '/remove-faculties/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(assignRemoveFacultiesZodSchema),
  CourseController.removeFaculties
);

export const CourseRoutes = router;
