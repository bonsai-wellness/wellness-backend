import { Request, Response } from "express";
import * as service from "../services/reservation.service";

export const apiListAvailableSlots = async (_req: Request, res: Response) => {
  try {
    const torneos = await service.listHorarios();
    return res.status(200).json(torneos);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};