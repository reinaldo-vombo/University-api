// lib/ultramsg.ts
import axios from 'axios';

const INSTANCE_ID = 'instance135378'; // pegue no painel do UltraMsg
const TOKEN = 'l3hbw3w3q030bzb2';

const BASE_URL = `https://api.ultramsg.com/${INSTANCE_ID}/messages/chat`;

export async function sendWhatsAppMessage(to: string, message: string) {
  try {
    const response = await axios.post(BASE_URL, {
      token: TOKEN,
      to: to, // Ex: +244923123456
      body: message,
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar menssage no WhatsApp:', error);
    throw error;
  }
}
