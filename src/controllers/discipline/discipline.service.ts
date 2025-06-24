import { Discipline } from '../../generated/prisma';
import getPrismaQuery from '../../helpers/getPrismaQuery';
import { IQueryParams } from '../../interfaces/common';
import { prisma } from '../../shared/prisma';

const createDicipline = async (info: Discipline): Promise<Discipline> => {
  
  const result = await prisma.discipline.create({
    data: info,
  });

  return result;
};

const getAllDisciplinesService = async (
  options: Partial<IQueryParams>
) => {
  const query = getPrismaQuery(options, ['title']);

  const result = await prisma.discipline.findMany(query);
  const total = await prisma.discipline.count();

  return {
    data: result,
    meta: {
      total,
      totalResult: result.length,
      totalPages: Math.ceil(total / (options.limit || 100)),
      currentPage: options.page || 1,
      limit: options.limit,
    },
  };
};

// ✅ Buscar uma única disciplina por ID
const getSingleDisciplineService = async (
  id: string
): Promise<Discipline | null> => {
  return await prisma.discipline.findUnique({
    where: { id },
  });
};

// ✅ Atualizar uma disciplina
const updateDisciplineService = async (
  id: string,
  info: Partial<Discipline>
): Promise<Discipline | null> => {
  return await prisma.discipline.update({
    where: { id },
    data: info,
  });
};

// ✅ Deletar disciplina
const deleteDisciplineService = async (
  id: string
): Promise<Discipline | null> => {
  return await prisma.discipline.delete({
    where: { id },
  });
};

export const DisciplineService = {
  createDicipline,
  getAllDisciplinesService,
  getSingleDisciplineService,
  updateDisciplineService,
  deleteDisciplineService,
};
