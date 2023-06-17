import { validationResult } from "express-validator";
import type { Request, Response } from "express";
import * as service from "../services/espacioPuntoImportante.service";

// Controller - Lista Puntos Importantes filtrado por espacio_id
export const apiPuntosImportantesByEspacioId = async (
  req: Request,
  res: Response
) => {
  // Validation (params)
  const errors = validationResult(req);
  if (!errors.isEmpty() && req.file?.path) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = parseInt(req.params.id);
  try {
    const espacios = await service.puntosImportantesByEspacioId(id);
    return res.status(200).json(espacios);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

// Controller - Crear EspacioPuntoImportante
export const apiCreateEspacioPuntoImportante = async (
  req: Request,
  res: Response
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const espacioPuntoImportante = req.body;
    const newEspacioPuntoImportante =
      await service.createEspacioPuntoImportante(espacioPuntoImportante);
    return res.status(201).json(newEspacioPuntoImportante);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
