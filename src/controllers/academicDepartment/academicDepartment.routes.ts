import express from "express";


import { AcademicDepartmentController } from "./academicDepartment.controller";
import authGuard from "../../middlewares/authGuard";
import validateRequest from "../../middlewares/validateRequest";
import queryParams from "../../middlewares/queryParams";
import { ENUM_USER_ROLE } from "../../enums/user";
import { createAcademicDepartmentZodSchema } from "./academicDepartment.validation";

const router = express.Router();

router.post(
  "/",
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(createAcademicDepartmentZodSchema),
  AcademicDepartmentController.createAcademicDepartment
);

router.get(
  "/",
  queryParams,
  AcademicDepartmentController.getAllAcademicDepartment
);
router.get("/:id", AcademicDepartmentController.getSingleAcademicDepartment);

router.patch(
  "/:id",
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.updateAcademicDepartment
);
router.delete(
  "/:id",
  authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentController.deleteAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
