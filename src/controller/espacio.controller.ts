import { validationResult } from "express-validator";
import { EspacioCreate } from "../types";
import { Request, Response } from "express";
import * as service from "../services/espacio.service";
import { stringToTime } from "../utils/stringToDate.utils";

export const apiListEspacios = async (_req: Request, res: Response) => {
  try {
    const espacios = await service.listEspacios();
    return res.status(200).json(espacios);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiEspaciosByPadreId = async (req: Request, res: Response) => {
  // Validation (params)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = parseInt(req.params.id);
  try {
    const espacios = await service.espaciosByPadreId(id);
    return res.status(200).json(espacios);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiCreateEspacio = async (req: Request, res: Response) => {
  try {
    const imagenPath = req.file?.path as string;
    const espacio: EspacioCreate = {
      name: req.body.name,
      code: req.body.code,
      capacity: parseInt(req.body.capacity),
      time_max: parseInt(req.body.time_max),
      details: req.body.details,
      espacio_padre_id: parseInt(req.body.espacio_padre_id),
      open_at: stringToTime(req.body.open_at),
      close_at: stringToTime(req.body.close_at),
      is_active: req.body.is_active,
      imagen: imagenPath,
    };
    const newEspacio = await service.createEspacio(espacio);
    return res.status(201).json(newEspacio);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
