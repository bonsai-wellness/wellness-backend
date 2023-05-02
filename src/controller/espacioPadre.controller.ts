import { validationResult } from "express-validator";
import type { Request, Response } from "express";
import * as service from "../services/espacioPadre.service";

export const apiListEspaciosPadre = async (_req: Request, res: Response) => {
  try {
    const espaciosPadre = await service.listEspaciosPadre();
    return res.status(200).json(espaciosPadre);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiCreateEspacioPadre = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const espacioPadre = req.body;
    const newEspacioPadre = await service.createEspacioPadre(espacioPadre);
    return res.status(201).json(newEspacioPadre);
  } catch (err: any) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};
