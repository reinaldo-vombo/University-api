import { PAYMENTSTATUS } from '../../generated/prisma';

export type TApprovedPayment = {
  paymentId: string;
  amount: number;
  studentNumber: string;
  message: string;
  approved: boolean;
  status: PAYMENTSTATUS;
};
