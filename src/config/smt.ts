import nodemailer from 'nodemailer';
import config from './index';

export const transport = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASS,
  },
});

export const emailOption = (
  userEmail: string,
  subect: string,
  html: string
) => {
  const options = {
    from: config.MAI_FROM,
    to: userEmail,
    subject: subect,
    html,
  };
  return options;
};
