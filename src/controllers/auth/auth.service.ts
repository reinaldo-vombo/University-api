import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import { prisma } from '../../shared/prisma';
import { UserRole } from '../../generated/prisma';
import { generatePassword } from '../../helpers/utils';
import { ENUM_USER_ROLE } from '../../enums/user';

export const AuthService = {
  async register(payload: { name: string; email: string; role: UserRole }) {
    const { email, role, name } = payload;

    const exitenUser = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (exitenUser) throw new Error('Já existe um utilizador com esté email');
    const generatedPassword = generatePassword(12); // You can specify the length as needed
    console.log(generatedPassword);

    // Hash the generated password
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);
    const user = await prisma.users.create({
      data: {
        name: name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return { id: user.id, email: user.email, role: user.role };
  },

  async login(payload: { email: string; password: string }) {
    const user = await prisma.users.findUnique({
      where: { email: payload.email },
    });

    if (!user) throw new Error('User not found');

    const isPasswordMatch = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (!isPasswordMatch) throw new Error('Credencias incoretas');

    const token = jwt.sign(
      { id: user.id, role: user.role },
      config.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    return {
      accessToken: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
      },
    };
  },
  async falculylogin(payload: { facultyId: string; password: string }) {
    const falculty = await prisma.faculty.findUnique({
      where: { facultyId: payload.facultyId },
    });

    if (!falculty)
      throw new Error('Não encontramos nenhum professor com esté número');

    const isPasswordMatch = await bcrypt.compare(
      payload.password,
      falculty.password
    );
    if (!isPasswordMatch) throw new Error('Credencias incoretas');

    const token = jwt.sign(
      { id: falculty.id, role: ENUM_USER_ROLE.FACULTY },
      config.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    return {
      accessToken: token,
      user: {
        id: falculty.id,
        name: {
          firstName: falculty.firstName,
          lastName: falculty.lastName,
        },
        role: ENUM_USER_ROLE.FACULTY,
        email: falculty.email,
        falcultyId: falculty.facultyId,
        avatar: falculty.profileImage,
      },
    };
  },
  async studentlogin(payload: { studentId: string; password: string }) {
    const student = await prisma.student.findUnique({
      where: { studentId: payload.studentId },
    });

    if (!student)
      throw new Error(
        'Não encontramos nenhum aluno com esté número de estudante'
      );

    const isPasswordMatch = await bcrypt.compare(
      payload.password,
      student.password
    );
    if (!isPasswordMatch) throw new Error('Credencias incoretas');

    const token = jwt.sign(
      { id: student.id, role: ENUM_USER_ROLE.FACULTY },
      config.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    return {
      accessToken: token,
      user: {
        id: student.id,
        name: {
          firstName: student.firstName,
          lastName: student.lastName,
        },
        email: student.email,
        role: ENUM_USER_ROLE.STUDENT,
        avatar: student.profileImage,
        studentId: student.studentId,
      },
    };
  },
};
