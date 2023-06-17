import { validationResult } from "express-validator";
import type { Request, Response } from "express";
import * as service from "../services/wellnessGym.service";

// Controller - Trae Datos de Wellness Gym
export const apiWellnessGymById = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const id = parseInt(req.params.id);
  try {
    const wellnessGym = await service.wellnessGymById(id);
    return res.status(200).json(wellnessGym);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};
