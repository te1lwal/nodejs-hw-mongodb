import multer from "multer";
import { TEMP_UPLOAD_DIR } from "../constants/index.js";

const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null, TEMP_UPLOAD_DIR);
    },
    filename: function (request, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, `${uniqueSuffix}_${file.originalname}`);
    },
});

export const upload = multer({ storage });