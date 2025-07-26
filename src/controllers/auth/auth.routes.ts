import express from "express";
import { AuthController } from "./auth.controller";
import authGuard from "../../middlewares/authGuard";
import { ENUM_USER_ROLE } from "../../enums/user";

const router = express.Router();

router.post("/register", 
   authGuard(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN), 
   AuthController.register
);
router.post("/login", AuthController.login);
router.post("/recover-password", AuthController.recoverPassword)
router.post("/reset-password", AuthController.resetPassword)
router.get("/me", AuthController.getMyProfile); // optional, if token is provided

export const AuthRoutes = router;