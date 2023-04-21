import { Deporte } from "@prisma/client";
import { DeporteCreate } from "../types";
import { db } from "../utils/db.server";
import { serverAddress } from "../utils/serverAddress.utils";

export const listDeportes = async (): Promise<Deporte[]> => {
  const ip = serverAddress();
  const data = await db.deporte.findMany();
  data.forEach((item) => {
    item.imagen = ip + item.imagen;
  });
  return data;
};

export const createDeporte = async (
  deporte: DeporteCreate
): Promise<Deporte> => {
  return db.deporte.create({ data: deporte });
};
