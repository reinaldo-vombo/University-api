import { AdmitionExameRegistration } from '../../generated/prisma';
import { prisma } from '../../shared/prisma';

const createAdmitionExameRegistration = async (
  info: AdmitionExameRegistration
): Promise<AdmitionExameRegistration> => {
  const now = new Date('2025-07-01');

  // Procurar fase atual
  const currentFase = await prisma.exameFase.findFirst({
    where: {
      startDate: { lte: now },
      endDate: { gte: now },
    },
  });

  if (!currentFase) {
    throw new Error('Nenhuma fase de exame válida no momento.');
  }
  const body = {
    ...info,
    faseId: currentFase.id,
    exameDate: currentFase.startDate,
  };
  const result = await prisma.admitionExameRegistration.create({
    data: body,
  });

  return result;
};

const getAllAdmitionExameRegistration = async () => {
  const result = await prisma.admitionExameRegistration.findMany();
  return {
    data: result,
  };
};

const getPassedApplicants = async () => {
  const passed = await prisma.admitionExameRegistration.findMany({
    where: {
      passed: true,
    },
  });
  return passed;
};

const getFailedApplicants = async () => {
  const failed = await prisma.admitionExameRegistration.findMany({
    where: {
      passed: false,
    },
  });
  return failed;
};

const getPaymentApprovedApplicants = async () => {
  const approvedPayments = await prisma.admitionExameRegistration.findMany({
    where: {
      aprovePayment: true,
    },
  });
  return approvedPayments;
};

const getSingleCandidate = async (id: string) => {
  const candidate = await prisma.admitionExameRegistration.findUnique({
    where: {
      id,
    },
  });
  return candidate;
};
const updateSingleCandidate = async (
  id: string,
  info: Partial<AdmitionExameRegistration>
) => {
  const candidate = await prisma.admitionExameRegistration.update({
    where: {
      id,
    },
    data: info,
  });
  return candidate;
};

export const AdmitionExameService = {
  createAdmitionExameRegistration,
  getPassedApplicants,
  getFailedApplicants,
  getPaymentApprovedApplicants,
  getSingleCandidate,
  updateSingleCandidate,
  getAllAdmitionExameRegistration,
};
