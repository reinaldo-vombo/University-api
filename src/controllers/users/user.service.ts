import config from '../../config';
import { emailOption, transport } from '../../config/smt';
import { userEnviteEmail } from '../../email/user-evite';
import { Users } from '../../generated/prisma';
import { generatePassword } from '../../helpers/utils';
import { prisma } from '../../shared/prisma';
import bcrypt from 'bcrypt';

const createUserService = async (info: Users): Promise<Users> => {
  const { name, email, role, avatar } = info;
  const generatedPassword = generatePassword(12);
  const template = userEnviteEmail(name, generatedPassword, avatar);

  // Hash the generated password
  const hashedPassword = await bcrypt.hash(generatedPassword, 10);
  const result = await prisma.users.create({
    data: {
      name: name,
      email,
      password: hashedPassword,
      role,
    },
  });

  try {
    await transport.sendMail(
      emailOption(
        email,
        `Bem-vindo ao ${config.APP_NAME} Painel Admistrativo`,
        template
      )
    );
  } catch (error) {
    console.log('mail trasport error:', error);
  }

  return result;
};
const getAllUsersService = async () => {
  const result = await prisma.users.findMany();
  return {
    data: result,
  };
};
const getSigleUserService = async (id: string) => {
  const result = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return {
    data: result,
  };
};
const updatedSigleUserService = async (id: string, info: Partial<Users>) => {
  const result = await prisma.users.update({
    where: {
      id,
    },
    data: info,
  });
  return {
    data: result,
  };
};
const deleteSigleUserService = async (id: string) => {
  const result = await prisma.users.delete({
    where: {
      id,
    },
  });
  return {
    data: result,
  };
};

export const userService = {
  createUserService,
  getAllUsersService,
  getSigleUserService,
  updatedSigleUserService,
  deleteSigleUserService,
};
