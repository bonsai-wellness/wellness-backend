import type { Request, Response } from "express";
import { createDeporte, getAllDeportes } from "../services/deporte.service";
import { DeporteCreate } from "../types";

export const apiGetAllDeportes = () => async (_req: Request, res: Response) => {
  try {
    const espacios = await getAllDeportes();
    return res.status(200).json(espacios);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiCreateDeporte = () => async (req: Request, res: Response) => {
  try {
    req.body.imagen = req.file?.path;
    const deporte: DeporteCreate = {
      name: req.body.name,
      imagen: req.body.imagen,
    };
    const newDeporte = await createDeporte(deporte);
    return res.status(201).json(newDeporte);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
