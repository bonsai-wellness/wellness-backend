import { db } from "../utils/db.server";
import { Espacio, EspacioDeporte } from "@prisma/client";
import { EspacioDeporteCreate } from "../types";

export const createEspacioDeporte = async (
  espacioDeporte: EspacioDeporteCreate
): Promise<EspacioDeporte> => {
  return db.espacioDeporte.create({ data: espacioDeporte });
};

export const espaciosByDeporteId = async (id: number): Promise<Espacio[]> => {
  const data = await db.espacioDeporte.findMany({
    select: {
      espacio: true,
    },
    where: {
      deporte_id: id,
    },
  });
  return data.map((item: any) => item.espacio);
};
