import { Events } from '../../generated/prisma';
import getPrismaQuery from '../../helpers/getPrismaQuery';
import { IQueryParams } from '../../interfaces/common';
import { prisma } from '../../shared/prisma';

const createEventesService = async (
  info: Events
): Promise<Events> => {

  const result = await prisma.events.create({
    data: info,
  });

  return result;
};

const getAllEventsService = async (
  options: Partial<IQueryParams>
) => {
  const query = getPrismaQuery(options, ['title']);

  const result = await prisma.events.findMany(query);
  const total = await prisma.academicSemester.count();

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

const getSingleEventsService = async (
  id: string
): Promise<Events | null> => {
  const result = await prisma.events.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const updateEventsService = async (
  id: string,
  info: Partial<Events>
): Promise<Events | null> => {
  const result = await prisma.events.update({
    where: {
      id,
    },
    data: info,
  });

  return result;
};

const deleteEventsService = async (
  id: string
): Promise<Events | null> => {
  const result = await prisma.events.delete({
    where: {
      id,
    },
  });

  return result;
};

export const EventsService = {
  createEventesService,
  getAllEventsService,
  getSingleEventsService,
  updateEventsService,
  deleteEventsService,
};
