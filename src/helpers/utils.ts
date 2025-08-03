import { handleError } from '../errors/error-hndler';
import { prisma } from '../shared/prisma';
import axios from 'axios';

export const generatePassword = (length: number = 12): string => {
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

export const generateUniqueFacultyId = async (): Promise<string> => {
  let unique = false;
  let facultyId = '';
  const year = new Date().getFullYear();

  while (!unique) {
    const randomPart = Math.floor(1000 + Math.random() * 9000);
    facultyId = `FAC-${year}-${randomPart}`;

    const existing = await prisma.faculty.findUnique({
      where: { facultyId },
      select: { id: true },
    });

    if (!existing) unique = true;
  }

  return facultyId;
};

interface StudentMarks {
  continuousAssessments: number[]; // List of continuous assessment scores
  frequencyExam: number; // Frequency exam score
}

interface OfferedCourse {
  suspendGrade: number; // Minimum grade required to dispense the final exam
}
export function isDispensedFromFinalExam(
  studentMarks: StudentMarks,
  offeredCourse: OfferedCourse
): boolean {
  const totalContinuousAssessments = studentMarks.continuousAssessments.reduce(
    (acc, mark) => acc + mark,
    0
  );

  const totalScore = totalContinuousAssessments + studentMarks.frequencyExam;

  if (totalScore >= offeredCourse.suspendGrade) {
    return true;
  } else {
    return false;
  }
}

export const createPaymentWithReference = async (
  ref: string,
  entity: string
) => {
  const options = {
    method: 'POST',
    url: 'https://stoplight.io/mocks/appypay/appypay-payment-gateway/44997391/references',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'pt-BR',
      Assertion: '',
      Accept: 'application/json',
      Authorization: 'Bearer 123',
    },
    data: { entity: '00348', referenceNumber: '440750163' },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = handleError('Error sending payment reference', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};

export const getSiglePaymentReference = async (reference: string) => {
  const options = {
    method: 'GET',
    url: `https://stoplight.io/mocks/appypay/appypay-payment-gateway/44997391/references/${reference}`,
    headers: {
      'Accept-Language': 'pt-BR',
      Assertion: '',
      Accept: 'application/json',
      Authorization: 'Bearer 123',
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    const errorResponse = handleError('Error geting payment reference', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};

export const getAllPaymentReferenceByEntity = async (entity: string) => {
  const options = {
    method: 'GET',
    url: 'https://stoplight.io/mocks/appypay/appypay-payment-gateway/44997391/references',
    headers: {
      'Accept-Language': 'pt-BR',
      Assertion: '',
      Accept: 'application/json',
      Authorization: 'Bearer 123',
    },
  };

  try {
    const { data } = await axios.request(options);
    const filterByEntity = data.filter((item: any) => item.entity === entity);
    if (filterByEntity.length === 0) {
      const errorResponse = handleError(
        `No payment references found for entity: ${entity}`,
        null,
        404
      );
      throw new Error(JSON.stringify(errorResponse));
    }
    console.log(data);
  } catch (error) {
    const errorResponse = handleError('Error geting payment reference', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};
