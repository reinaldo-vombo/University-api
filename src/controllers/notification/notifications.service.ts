// // routes/notifications.ts
// import express from 'express';

import { sendWhatsAppMessage } from '../../helpers/ultramsg';
import { prisma } from '../../shared/prisma';

type TProps = {
  registrationId: string;
  message: string;
};

const sendMessage = async (info: TProps) => {
  const { registrationId, message } = info;
  try {
    const registration = await prisma.admitionExameRegistration.findUnique({
      where: { id: registrationId },
    });

    if (!registration || !registration.phoneNumber) {
      throw new Error('Registro não encontrado ou sem número');
    }

    await sendWhatsAppMessage(registration.phoneNumber, message);

    // salva motivo no banco
    await prisma.admitionExameRegistration.update({
      where: { id: registrationId },
      data: {
        status: 'DENIDE',
        rejectionReason: message,
      },
    });

    return registration;
  } catch (error) {
    return;
  }
};

export const SendMessageService = {
  sendMessage,
};
