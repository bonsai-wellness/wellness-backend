import type { Request, Response } from "express";
import * as service from "../services/puntoImportante.service";
import { validationResult } from "express-validator";

export const apiListPuntoImportante = async (_req: Request, res: Response) => {
  try {
    const puntosImportantes = await service.listPuntoImportante();
    return res.status(200).json(puntosImportantes);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiCreatePuntoImportante = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const puntoImportante = req.body;
    const newPuntoImportante = await service.createPuntoImportante(
      puntoImportante
    );
    return res.status(201).json(newPuntoImportante);
  } catch (err: any) {
    console.log(err);
    return res.status(500).json(err.message);
  }
};
