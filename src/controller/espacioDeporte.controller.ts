import { Request, Response } from "express";
import { validationResult } from "express-validator";
import * as service from "../services/espacioDeporte.service";

export const apiCreateEspacioDeporte = async (req: Request, res: Response) => {
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
    const newEspacioPadre = await service.createEspacioDeporte(espacioDeporte);
    return res.status(201).json(newEspacioPadre);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiEspaciosByDeporteId = async (req: Request, res: Response) => {
  // Validation (params)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = parseInt(req.params.id);
  try {
    const espacios = await service.espaciosByDeporteId(id);
    return res.status(200).json(espacios);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
