import { Student, StudentEnrolledCourse } from '../../generated/prisma';
import httpStatus from 'http-status';
import ApiError from '../../errors/ApiError';
import bcrypt from 'bcrypt';
import asyncHandler from '../../shared/asyncHandler';
import sendResponse from '../../shared/sendResponse';
import { StudentService } from './student.service';
import { prisma } from '../../shared/prisma';
import { saveUploadedFiles } from '../../utils/saveUploadedFiles';
import { StudentUtils } from './student.utils';

const createStudent = asyncHandler(async (req, res) => {
  const fullName: string = `${req.body.firstName} ${req.body.lastName}`;

  const aplicant = await prisma.admitionExameRegistration.findUnique({
    where: {
      applicantName: fullName,
    },
  });

  if (!aplicant) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Não existe nenhum candidato com este nome',
      data: aplicant,
    });
  }
  if (aplicant?.passed === false) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_ACCEPTABLE,
      success: false,
      message: 'Candidato não estas apto para fazer o registro',
      data: [],
    });
  }
  const files = req.files as {
    gradeDeclarationFile?: Express.Multer.File[];
    biFile?: Express.Multer.File[];
  };

  const documentPath = files?.gradeDeclarationFile?.[0]
    ? await saveUploadedFiles(files.gradeDeclarationFile[0])
    : null;

  const biFilePath = files?.biFile?.[0]
    ? await saveUploadedFiles(files.biFile[0])
    : null;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const studentId = StudentUtils.generateUniqueStudentNumber();
  const body: any = {
    ...req.body,
    studentId,
    password: hashedPassword,
    academicFacultyId: aplicant.academicFalcultyId,
    admissionRegistrationId: aplicant.id,
    gradeDeclarationFile: documentPath || req.body.declarationFileUrl,
    biFile: biFilePath || req.body.biFileUrl,
  };

  const result = await StudentService.createStudentService(body);

  sendResponse<Student>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Estudadente registrado',
    data: result,
  });
});

const getAllStudent = asyncHandler(async (req, res) => {
  const { data, meta } = await StudentService.getAllStudentService(
    req.queryParams
  );
  sendResponse<Student[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully',
    meta,
    data,
  });
});

const getSingleStudent = asyncHandler(async (req, res) => {
  const result = await StudentService.getSingleStudentService(req.params.id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Estudadente não encontrado');
  }

  sendResponse<Student>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully',
    data: result,
  });
});

const updateStudent = asyncHandler(async (req, res) => {
  const result = await StudentService.updateStudentService(
    req.params.id,
    req.body
  );

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Estudadente não encontrado');
  }

  sendResponse<Student>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dados atualizados',
    data: result,
  });
});

const deleteStudent = asyncHandler(async (req, res) => {
  const result = await StudentService.deleteStudentService(req.params.id);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }

  sendResponse<Student>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Estudadente eliminado',
    data: result,
  });
});

const getStudentCourses = asyncHandler(async (req, res) => {
  const userId = req.user?.id;
  const result = await StudentService.getStudentCoursesService(userId);

  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');
  }

  sendResponse<StudentEnrolledCourse[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Courses retrieved successfully',
    data: result,
  });
});

const getStudentCourseSchedules = asyncHandler(async (req, res) => {
  const userId = req.user?.id;
  const result = await StudentService.getStudentCourseScheduleService(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course Schedules retrieved successfully',
    data: result,
  });
});

const getAcademicInfo = asyncHandler(async (req, res) => {
  const userId = req.user?.id;
  const result = await StudentService.getAcademicInfoService(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic info retrieved successfully',
    data: result,
  });
});

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  getStudentCourses,
  getStudentCourseSchedules,
  getAcademicInfo,
};
