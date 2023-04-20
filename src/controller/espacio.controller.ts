import { Espacio } from "@prisma/client";
import { db } from "../utils/db.server";
import { EspacioCreate } from "../types";
import { serverAddress } from "../utils/serverAddress.utils";

export const listEspacios = async (): Promise<Espacio[]> => {
  const ip = serverAddress();
  const data = await db.espacio.findMany();
  data.forEach((item) => {
    item.imagen = ip + item.imagen;
  });
  return data;
};

export const createEspacio = async (
  espacio: EspacioCreate
): Promise<Espacio> => {
  return db.espacio.create({ data: espacio });
};
