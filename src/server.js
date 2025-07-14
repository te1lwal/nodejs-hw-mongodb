import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import cookieParser from "cookie-parser";

import { getEnvVar } from './utils/getEnvVar.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import router from './routers/contacts.js';
import authRouter from "./routers/auth.js";

export function setupServer() {      

    const PORT = Number(getEnvVar('PORT', '3000'));

    const app = express();

    app.use(express.json());
    
    app.use(
        pino({
          transport: {
            target: 'pino-pretty',
          },
        }),
      );

    app.use(cors());

    app.use(cookieParser());

    app.get('/', (req, res) => {
      res.json({
        message: 'Hello World!',
      });
    });

    app.use("/auth", authRouter);
    app.use(router); 
   
    app.use('*', notFoundHandler);

    app.use(errorHandler);
  
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
};