import nodemailer from "nodemailer";
import { SMTP } from "../constants/index.js";
import { getEnvVar } from "./getEnvVar.js";

// Логування для перевірки параметрів SMTP
console.log("SMTP PORT:", getEnvVar(SMTP.SMTP_PORT));
console.log("Secure:", false);

const transporter = nodemailer.createTransport({
  host: getEnvVar(SMTP.SMTP_HOST),
  port: Number(getEnvVar(SMTP.SMTP_PORT)),
  secure: false, // обов’язково для порту 587
  auth: {
    user: getEnvVar(SMTP.SMTP_USER),
    pass: getEnvVar(SMTP.SMTP_PASSWORD),
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (options) => {
  try {
    console.log("📨 Email options:", options);

    const result = await transporter.sendMail(options);

    console.log("✅ Email sent:", result);
    return result;
  } catch (err) {
    console.error("❌ Send error:", err);
    throw err;
  }
};