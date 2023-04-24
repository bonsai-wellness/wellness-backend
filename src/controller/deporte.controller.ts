import { Deporte } from "@prisma/client";
import { DeporteCreate } from "../types";
import { db } from "../utils/db.server";

export const listDeportes = async (): Promise<Deporte[]> => {
  return db.deporte.findMany();
};

export const createDeporte = async (
  deporte: DeporteCreate
): Promise<Deporte> => {
  return db.deporte.create({ data: deporte });
};
