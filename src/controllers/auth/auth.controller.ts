import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';

export const AuthController = {
  async register(req: Request, res: Response) {
    const result = await AuthService.register(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Utilizador criado com sucesso',
      data: result,
    });
  },

  async login(req: Request, res: Response) {
    const result = await AuthService.login(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Login successfully',
      data: result,
    });
  },
  async recoverPassword(req: Request, res: Response) {
    const result = await AuthService.recoverPassword(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Email envida, por-favor verique sua caixa de entrada',
      data: result,
    });
  },
  async resetPassword(req: Request, res: Response) {
    const result = await AuthService.resetPassword(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: result.message,
      data: [],
    });
  },
  async falculyLogin(req: Request, res: Response) {
    const result = await AuthService.falculylogin(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Login successfully',
      data: result,
    });
  },
  async studentlogin(req: Request, res: Response) {
    const result = await AuthService.studentlogin(req.body);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Login successfully',
      data: result,
    });
  },

  async getMyProfile(req: Request, res: Response) {
    const user = req.user; // you need to attach decoded user in middleware
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Login successfully',
      data: user,
    });
  },
};
