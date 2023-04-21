import { Deporte } from "@prisma/client";
import { DeporteCreate } from "../types";
import { db } from "../utils/db.server";

export const createDeporte = async (
  deporte: DeporteCreate
): Promise<Deporte> => {
  return db.deporte.create({ data: deporte });
};