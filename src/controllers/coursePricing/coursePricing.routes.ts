import express from 'express';
import { CoursePricingController } from './coursePricing.controller';
import {
 createCoursePriceZodSchema, 
 updateCoursePriceZodSchema
} from './coursePricing.validation';
import authGuard from '../../middlewares/authGuard';
import { ENUM_USER_ROLE } from '../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import queryParams from '../../middlewares/queryParams';

const router = express.Router();

router.post(
  '/',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createCoursePriceZodSchema),
  CoursePricingController.createCoursePricing
);

router.get('/', queryParams, CoursePricingController.getAllCoursePricing);

router.get('/:id', CoursePricingController.getSingleCoursePricing);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(updateCoursePriceZodSchema),
  CoursePricingController.updateCoursePricing
);

router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  CoursePricingController.deleteCoursePricing
);

export const CoursePricingRoutes = router;
