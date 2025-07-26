import { render } from '@react-email/components';
import { Users } from '../../generated/prisma';
import { FLASH_MESSAGE } from '../../helpers/flashMessage';
import asyncHandler from '../../shared/asyncHandler';
import { prisma } from '../../shared/prisma';
import sendResponse from '../../shared/sendResponse';
import { saveUploadedFiles } from '../../utils/saveUploadedFiles';
import { userService } from './user.service';
import httpStatus from 'http-status';

const createUser = asyncHandler(async (req, res) => {
  const userExist = await prisma.users.findUnique({
    where: {
      email: req.body.email as string,
    },
  });

  if (userExist) {
    return sendResponse(res, {
      statusCode: httpStatus.IM_USED,
      success: true,
      message: 'Já existe um utilizadore com esté email',
      data: [],
    });
  }
  const result = await userService.createUserService(req.body);

  sendResponse<Users>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'utilizadore retornados com sucesso',
    data: result,
  });
});
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const { data } = await userService.getAllUsersService(); // Get users from the service
    sendResponse<Users[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Todos os utilizadores retornados com sucesso',
      data,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Error fetching users.',
      error: (error.message as string) || 'Unknown error occurred.',
    });
  }
});

const getSingleUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await userService.getSigleUserService(id);
  if (!result.data) {
    throw new Error('utilizador nao encontrado');
  }
  sendResponse<Users>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'utilizadore retornados com sucesso',
    data: result.data,
  });
});
const deleteSingleUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await userService.deleteSigleUserService(id);
  sendResponse<Users>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'utilizadore eliminado com sucesso',
    data: result.data,
  });
});
const updateSingleUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const files = req.files as {
    avatar?: Express.Multer.File[];
  };
  const avatraPath = files?.avatar?.[0]
    ? await saveUploadedFiles(files.avatar[0])
    : null;

  const requestbody = {
    name: req.body.name,
    email: req.body.email,
    avatar: avatraPath || req.body.avatar,
    role: req.body.role,
  };

  const result = await userService.updatedSigleUserService(id, requestbody);
  sendResponse<Users>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: FLASH_MESSAGE.USER_UPDATED,
    data: result.data,
  });
});

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
