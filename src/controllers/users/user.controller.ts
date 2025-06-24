import { Users } from '../../generated/prisma';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { saveUploadedFiles } from '../../utils/saveUploadedFiles';
import { userService } from './user.service';
import httpStatus from 'http-status';

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const { data } = await userService.getAllUsers();  // Get users from the service
    sendResponse<Users[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Todos os utilizadores retornados com sucesso',
      data,
    });
  } catch (error: any) {
    console.error('Error fetching users from the service:', error);  // Log the error
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Error fetching users.',
      error: error.message as string || 'Unknown error occurred.',
    });
  }
});
const getSingleUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await userService.getSigleUser(id);
  if(!result.data){
    throw new Error('utilizador nao encontrado')
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
  const result = await userService.deleteSigleUser(id);
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
  console.log('file',req.files);
  
    const avatraPath = files?.avatar?.[0]
      ? await saveUploadedFiles(files.avatar[0])
      : null;
      const requestbody = {
        name: req.body.name,
        email: req.body.email,
        avatar: avatraPath,
        role: req.body.role
      }
      console.log(req.body);
      
  const result = await userService.updatedSigleUser(id, requestbody);
  sendResponse<Users>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'utilizadores atualizado com sucesso',
    data: result.data,
  });
});

export const UserController = {
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
