// // routes/notifications.ts
// import express from 'express';

import { prisma } from '../../shared/prisma';
import { handleError } from '../../errors/error-hndler';
import { createPaymentWithReference } from './payments.util';

type TProps = {
  entity: string;
  referenceNumber: string;
};

const paymentByReference = async (info: TProps) => {
  const { entity, referenceNumber } = info;
  try {
    const payment = await prisma.payment.create({
      data: {
        paymentType: 'EXPRESS',
        status: 'PENDING',
        method: 'REFERENCE',
      },
    });

    const payload = await createPaymentWithReference(referenceNumber, entity);
    if (payload && payload.references && payload.references.length > 0) {
      // salva motivo no banco
      const paymentRef = await prisma.paymentReference.create({
        data: {
          reference: payload.refereces[0].referenceNumber,
          code: payload.refereces[0].code,
          message: payload.refereces[0].message,
          paymentId: payment.id,
        },
      });

      // await prisma.payment.update({
      //      where: { id: payment.id },
      //      data: {
      //        status: 'COMPLETED', // Or whatever status you want
      //        paymentRecipt: payload.references[0].referenceNumber,  // Store the reference number as a receipt
      //      },
      //    });

      return paymentRef;
    } else {
      const errorResponse = handleError(
        'Invalid data received from the external API.',
        payload
      );
      throw new Error(JSON.stringify(errorResponse));
    }
  } catch (error) {
    const errorResponse = handleError('Error during payment creation.', error);
    throw new Error(JSON.stringify(errorResponse));
  }
};

export const PaymentsService = {
  paymentByReference,
};
