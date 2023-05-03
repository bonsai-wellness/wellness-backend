import { Request, Response } from "express";
import { TorneoCreate } from "../types";
import * as service from "../services/torneo.service";

export const apiListTorneos = async (_req: Request, res: Response) => {
  try {
    const torneos = await service.listTorneos();
    return res.status(200).json(torneos);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiCreateTorneo = async (req: Request, res: Response) => {
  try {
    req.body.imagen = req.body.finalName;
    const torneo: TorneoCreate = {
      name: req.body.name,
      evento: req.body.evento,
      description: req.body.description,
      url: req.body.url,
      date_start: new Date(req.body.date_start),
      date_end: new Date(req.body.date_end),
      location: req.body.location,
      imagen: req.body.imagen,
      is_active: req.body.is_active,
      deporte_id: parseInt(req.body.deporte_id),
    };
    const newTorneo = await service.createTorneo(torneo);
    return res.status(201).json(newTorneo);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiDeleteTorneo = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deletedTorneo = await service.deleteTorneo(id);
    return res.status(200).json(deletedTorneo);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
