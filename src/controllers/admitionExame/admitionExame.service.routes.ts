import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createadmitionExameZodSchema } from './admitionExame.validation';
import { AdmitionExameController } from './admititionExame.controller';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLE } from '../../enums/user';
import { uploadFiles } from '../../middlewares/upload';

const router = express.Router();
const upload = uploadFiles('uploads/exam');

router.get(
  '/',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdmitionExameController.getAllAdmitionExameRegistration
);
router.post(
  '/register',
  upload.fields([
    { name: 'document', maxCount: 1 },
    { name: 'paymentRecipt', maxCount: 1 },
  ]),
  validateRequest(createadmitionExameZodSchema),
  AdmitionExameController.createAdmitionExameRegistration
);
router.get(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdmitionExameController.getSingleCandidate
);
router.put(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createadmitionExameZodSchema),
  AdmitionExameController.updateSingleCandidate
);
export const AcademicAdmitionExameRoutes = router;
