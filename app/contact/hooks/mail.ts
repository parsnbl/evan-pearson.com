'use server'
import nodemailer from 'nodemailer';
import 'dotenv/config'





const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_UN,
      pass: process.env.EMAIL_PASS
    }
});

export default async function mail({subject, email, body}: {subject: string, email:string, body: string}) {
  let response;
  try{
    response = await transporter.sendMail({
      from: '"Portfolio Contact Form" <parsnbl@gmail.com>',
      to: 'ejp1989@icloud.com',
      subject: `From ${email} - ${subject}`,
      text: body,
      html: `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1>Contact Form Message</h1>
          <h2>From: ${email}</h2>
          <h2>Subject: ${subject}</h2>
          <p>${body}</p>
        </body>
      </html>
      `
    });
    console.log('response:')
    console.log(response)
    return {
      ...response,
      messageSuccess: true
    }
  } catch(err) {
    console.error(err)
    return {
      ...response,
      messageSuccess: false
    }
  }

}