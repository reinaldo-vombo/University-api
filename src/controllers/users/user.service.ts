import { Users } from '../../generated/prisma';
import { prisma } from '../../shared/prisma';

const getAllUsers = async () => {
  const result = await prisma.users.findMany();
  return {
    data: result,
  };
};
const getSigleUser = async (id: string) => {
  const result = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return {
    data: result,
  };
};
const updatedSigleUser = async (id: string, info: Partial<Users>) => {
  
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
const deleteSigleUser = async (id: string) => {
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
  getAllUsers,
  getSigleUser,
  updatedSigleUser,
  deleteSigleUser,
};
