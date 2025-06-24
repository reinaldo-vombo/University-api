import { CoursePricing } from '../../generated/prisma';
import getPrismaQuery from '../../helpers/getPrismaQuery';
import { IQueryParams } from '../../interfaces/common';
import { prisma } from '../../shared/prisma';

const createCoursePricingService = async (info: CoursePricing): Promise<CoursePricing> => {
  
  const result = await prisma.coursePricing.create({
    data: info,
  });

  return result;
};

const getAllCoursePricingService = async (
  options: Partial<IQueryParams>
) => {
  const query = getPrismaQuery(options, ['title']);

  const result = await prisma.coursePricing.findMany(query);
  const total = await prisma.coursePricing.count();

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
const getSingleCoursePricingService = async (
  id: string
): Promise<CoursePricing | null> => {
  return await prisma.coursePricing.findUnique({
    where: { id },
  });
};

// ✅ Atualizar uma disciplina
const updateCoursePricingService = async (
  id: string,
  info: Partial<CoursePricing>
): Promise<CoursePricing | null> => {
  return await prisma.coursePricing.update({
    where: { id },
    data: info,
  });
};

// ✅ Deletar disciplina
const deleteCoursePricingService = async (
  id: string
): Promise<CoursePricing | null> => {
  return await prisma.coursePricing.delete({
    where: { id },
  });
};

export const CoursePricingService = {
  createCoursePricingService,
  getAllCoursePricingService,
  getSingleCoursePricingService,
  updateCoursePricingService,
  deleteCoursePricingService,
};
