import express from "express";
import { MulterError } from "multer";
import type { Request, Response } from "express";

import * as DeporteController from "../controller/deporte.controller";
import * as UploadMiddleware from "../middleware/upload.middleware";
import { DeporteCreate } from "../types";
import {
  validatorDeporte,
  validatorDeporteBody,
} from "../validator/deporte.validator";

const deporteRouter = express.Router();

deporteRouter.post(
  "/",
  UploadMiddleware.uploadImage,
  validatorDeporteBody,
  validatorDeporte,
  async (req: Request, res: Response) => {
    try {
      req.body.imagen = req.file?.path;
      const deporte: DeporteCreate = {
        name: req.body.name,
        imagen: req.body.imagen,
      };
      const newDeporte = await DeporteController.createDeporte(deporte);
      return res.status(201).json(newDeporte);
    } catch (err: any) {
      if (err instanceof MulterError) {
        return res.status(500).json({ error: "error uploading file" });
      }
      if (!req.files?.length) {
        return res.status(400).json({ error: "No file (imagen) was recieved" });
      }
      return res.status(500).json(err.message);
    }
  }
);

export default deporteRouter;
