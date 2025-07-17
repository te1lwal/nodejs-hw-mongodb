import path from "node:path";

export const sortList = ["asc", "desc"];

export const SMTP = {
    SMTP_HOST: "SMTP_HOST",
    SMTP_PORT: "SMTP_PORT",
    SMTP_USER: "SMTP_USER",
    SMTP_PASSWORD: "SMTP_PASSWORD",
    SMTP_FROM: "SMTP_FROM",
};

export const TEMPLATES_DIR = path.join(process.cwd(), "templates");

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), "temp");
export const UPLOAD_DIR = path.join(process.cwd(), "uploads");

export const CLOUDINARY = {
    CLOUD_NAME: "CLOUD_NAME",
    API_KEY: "API_KEY",
    API_SECRET: "API_SECRET",
};