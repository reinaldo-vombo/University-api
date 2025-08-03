import config from '../config';

const baseUrl = config.PULIC_URL
  ? `https://${config.PULIC_URL}`
  : `http://${config.LOCAL_URL}`;

const teamEmail = config.APP_EMAIL;
const redirectUrl = config.FRONT_END_DOMAIN;
const appName = config.APP_NAME;

export function userEnviteEmail(
  name: string,
  validationCode: string,
  avatar: string | null
) {
  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html>
   <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--$-->
   </head>
   <body
      style='margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;background-color:rgb(255,255,255);padding-left:8px;padding-right:8px;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'>
      <div
         style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0"
         data-skip-in-text="true">
         Join Alan on Vercel
         <div>
          ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
         </div>
      </div>
      <table
         align="center"
         width="100%"
         border="0"
         cellpadding="0"
         cellspacing="0"
         style="margin-left:auto;margin-right:auto;margin-top:40px;margin-bottom:40px;max-width:465px;border-radius:0.25rem;border-width:1px;border-color:rgb(234,234,234);border-style:solid;padding:20px">
         <tbody>
         <tr style="width:100%">
            <td>
               <table
               align="center"
               width="100%"
               border="0"
               cellpadding="0"
               cellspacing="0"
               style="margin-top:32px">
               <tbody>
                  <tr>
                     <td>
                     <img
                        alt="Vercel Logo"
                        height="37"
                        src="${baseUrl}"
                        style="margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;display:block;outline:none;border:none;text-decoration:none"
                        width="40" />
                     </td>
                  </tr>
               </tbody>
               </table>
               <h1
               style="margin-left:0;margin-right:0;margin-top:30px;margin-bottom:30px;padding:0;text-align:center;font-weight:400;font-size:24px;color:rgb(0,0,0)">
               Junta-se a <strong>${appName}</strong> 
               </h1>
               <p
               style="font-size:14px;color:rgb(0,0,0);line-height:24px;margin-top:16px;margin-bottom:16px">
               Olá
               <!-- -->${name}<!-- -->,
               </p>
               <p
               style="font-size:14px;color:rgb(0,0,0);line-height:24px;margin-top:16px;margin-bottom:16px">
               <strong>${name}</strong> (<a
                  href="mailto:${teamEmail}"
                  style="color:rgb(37,99,235);text-decoration-line:none"
                  target="_blank"
                  >${teamEmail}</a
               >) convidou você para juntar-se a equipa <strong>${appName}</strong><!-- -->
               </p>
               <table
               align="center"
               width="100%"
               border="0"
               cellpadding="0"
               cellspacing="0">
               <tbody>
                  <tr>
                     <td>
                     <table
                        align="center"
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0">
                        <tbody style="width:100%">
                           <tr style="width:100%">
                           <td align="right" data-id="__react-email-column">
                              <img
                                 alt="${name}"
                                 height="64"
                                 src="${avatar || 'https://react-email-demo-jkedocxxs-resend.vercel.app/static/vercel-user.png'}"
                                 style="border-radius:9999px;display:block;outline:none;border:none;text-decoration:none"
                                 width="64" />
                           </td>
                           <td align="center" data-id="__react-email-column">
                              <img
                                 alt="Arrow indicating invitation"
                                 height="9"
                                 src="https://react-email-demo-jkedocxxs-resend.vercel.app/static/vercel-arrow.png"
                                 style="display:block;outline:none;border:none;text-decoration:none"
                                 width="12" />
                           </td>
                           <td align="left" data-id="__react-email-column">
                              <img
                                 alt="Enigma team logo"
                                 height="64"
                                 src="https://react-email-demo-jkedocxxs-resend.vercel.app/static/vercel-team.png"
                                 style="border-radius:9999px;display:block;outline:none;border:none;text-decoration:none"
                                 width="64" />
                           </td>
                           </tr>
                        </tbody>
                     </table>
                     </td>
                  </tr>
               </tbody>
               </table>
               <table
               align="center"
               width="100%"
               border="0"
               cellpadding="0"
               cellspacing="0"
               style="margin-top:32px;margin-bottom:32px;text-align:center">
               <tbody>
                  <tr>
                     <td>
                     <p style="margin: 0 0 15px;color: #3c4149;font-size: 15px">
                        This link and code will only be valid for the next 5 minutes. If the
                        link does not work, you can use the login verification code directly:
                     </p>
                      <code style="margin: 0 0 15px;font-family: monospace;font-weight:700;padding: 1px 4px;background-color: #dfe1e4;letter-spacing:-0.3px;font-size:21px;border-radius:4px;color: #3c4149">
                        ${validationCode}
                      </code>
                     <a
                        href="${redirectUrl}/auth/apanel/login"
                        style="border-radius:0.25rem;background-color:rgb(0,0,0);padding-left:20px;padding-right:20px;padding-top:12px;padding-bottom:12px;text-align:center;font-weight:600;font-size:12px;color:rgb(255,255,255);text-decoration-line:none;line-height:100%;text-decoration:none;display:inline-block;max-width:100%;mso-padding-alt:0px"
                        target="_blank"
                        ><span
                           ><!--[if mso]><i style="mso-font-width:500%;mso-text-raise:18" hidden>&#8202;&#8202;</i><![endif]--></span
                        ><span
                           style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px"
                           >Junta-se a equipa</span
                        ><span
                           ><!--[if mso]><i style="mso-font-width:500%" hidden>&#8202;&#8202;&#8203;</i><![endif]--></span
                        ></a
                     >
                     </td>
                  </tr>
               </tbody>
               </table>
               <hr
               style="margin-left:0;margin-right:0;margin-top:26px;margin-bottom:26px;width:100%;border-width:1px;border-color:rgb(234,234,234);border-style:solid;border:none;border-top:1px solid #eaeaea" />
               <p
               style="color:rgb(102,102,102);font-size:12px;line-height:24px;margin-top:16px;margin-bottom:16px">
               Este convite era para<!-- -->
               <span style="color:rgb(0,0,0)">${name}</span>. Este convite foi enviado do número
                <span style="color:rgb(0,0,0)">204.13.186.218</span>
               <!-- -->localizado em<!-- -->
               <span style="color:rgb(0,0,0)">Luanda, Angola</span>. Se você
               não esperava por este convite, pode ignorar este e-mail.
               </p>
            </td>
         </tr>
         </tbody>
      </table>
      <!--/$-->
   </body>
   </html>
`;

  return html;
}
