// lib/ultramsg.ts
import axios from 'axios';
import config from '../config';

const INSTANCE_ID = config.UTRA_MSG_INSTANCE_ID;
const TOKEN = config.UTRA_MSG_TOKEN;

const BASE_URL = `https://api.ultramsg.com/${INSTANCE_ID}/messages/chat`;

export async function sendWhatsAppMessage(to: string, message: string) {
  try {
    const response = await axios.post(BASE_URL, {
      token: TOKEN,
      to: to,
      body: message,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar menssage no WhatsApp:', error);
    throw error;
  }
}
