import nodemailer from "nodemailer";
import { customAlphabet } from 'nanoid'
import dotenv from 'dotenv'
dotenv.config()

export const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export const generateOtp = () => {
  const nanoid = customAlphabet('1234567890ABCDEF', 10)
  const otp = nanoid() //=> "4F90D13A42"
  return otp
}

export const  sendEmail = async (toEmail, subject, content) => {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
    from: `"PMS Team" <${process.env.SMTP_USER}>`, // sender address
    to: toEmail, // list of recipients
    subject: subject, // subject line
    html: content, // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error while sending mail:", err);
  }
}