import { Request, Response } from "express";
import * as service from "../services/timeSlots.service";
import { espaciosById } from "../services/espacio.service";

export const apiListAvailableSlots = async (req: Request, res: Response) => {
  const ids: [number] = req.body.espacio_ids;
  const date: Date = new Date(req.body.date);
  try {
    const espacios = await espaciosById(ids);
    const timeSlots = await service.generateTimeSlotsByEspacios(espacios, date);
    return res.status(200).json(timeSlots);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
