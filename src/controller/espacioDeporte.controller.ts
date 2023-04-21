import { db } from "../utils/db.server";
import { EspacioDeporte } from "@prisma/client";
import { EspacioDeporteCreate } from "../types";

export const createEspacioDeporte = async (
  espacioDeporte: EspacioDeporteCreate
): Promise<EspacioDeporte> => {
  return db.espacioDeporte.create({ data: espacioDeporte });
};
