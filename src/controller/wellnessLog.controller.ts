import type { Request, Response } from "express";
import * as service from "../services/wellnessLog.service";
import { WellnessLogCreate } from "../types";
import { validationResult } from "express-validator";

// Controller - Lista de Logs de Entrada y Salida de Gimnasio
export const apiListWellnessLog = async (_req: Request, res: Response) => {
  try {
    const wellnessLog = await service.listWellnessLog();
    res.status(201).json(wellnessLog);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Controller - Registrar Entrada o Salida
export const apiCreateWellnessLog = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { type, wellness_id } = req.body;
    const log: WellnessLogCreate = {
      type,
      wellness_id,
    };
    const newLog = await service.createWellnessLog(log);
    return res.status(201).json(newLog);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
