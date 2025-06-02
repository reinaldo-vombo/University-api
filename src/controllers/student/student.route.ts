import express from 'express';
import { ENUM_USER_ROLE } from '../../enums/user';
import authGuard from '../../middlewares/authGuard';
import queryParams from '../../middlewares/queryParams';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';
import {
  createStudentZodSchema,
  updateStudentZodSchema,
} from './student.validation';
import { uploadFiles } from '../../middlewares/upload';

const router = express.Router();
const upload = uploadFiles('uploads/student');

router.post(
  '/',
  upload.fields([
    { name: 'gradeDeclarationFile', maxCount: 1 },
    { name: 'biFile', maxCount: 1 },
  ]),
  // authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createStudentZodSchema),
  StudentController.createStudent
);

router.get('/', queryParams, StudentController.getAllStudent);

router.get(
  '/my-courses',
  authGuard(ENUM_USER_ROLE.STUDENT),
  StudentController.getStudentCourses
);

router.get(
  '/my-course-schedules',
  authGuard(ENUM_USER_ROLE.STUDENT),
  StudentController.getStudentCourseSchedules
);

router.get(
  '/my-academic-info',
  authGuard(ENUM_USER_ROLE.STUDENT),
  StudentController.getAcademicInfo
);

router.get('/:id', StudentController.getSingleStudent);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(updateStudentZodSchema),
  StudentController.updateStudent
);
router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.deleteStudent
);

export const StudentRoutes = router;
