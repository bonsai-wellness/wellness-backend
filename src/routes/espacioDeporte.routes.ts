import express from "express";
import type { Request, Response } from "express";

import * as EspacioDeporte from "../controller/espacioDeporte.controller";
import { body, validationResult } from "express-validator";

const espacioDeporteRouter = express.Router();

espacioDeporteRouter.post(
  "/",
  body("deporte_id").isInt(),
  body("espacio_id").isInt(),
  async (req: Request, res: Response) => {
    const allowedFields = ["deporte_id", "espacio_id"];
    const receivedFields = Object.keys(req.body);
    const extraFields = receivedFields.filter(
      (field) => !allowedFields.includes(field)
    );
    if (extraFields.length > 0) {
      return res.status(400).json({
        message: `Extra fields not allowed: ${extraFields.join(", ")}`,
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const espacioDeporte = req.body;
      const newEspacioPadre = await EspacioDeporte.createEspacioDeporte(
        espacioDeporte
      );
      return res.status(201).json(newEspacioPadre);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json(err.message);
    }
  }
);

export default espacioDeporteRouter;
