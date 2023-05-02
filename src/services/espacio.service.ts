import { Espacio } from "@prisma/client";
import { db } from "../utils/db.server";
import { EspacioCreate } from "../types";

export const listEspacios = async (): Promise<Espacio[]> => {
  return db.espacio.findMany();
};

export const espaciosByPadreId = async (id: number): Promise<Espacio[]> => {
  return db.espacio.findMany({
    where: {
      espacio_padre_id: id,
    },
  });
};

export const createEspacio = async (
  espacio: EspacioCreate
): Promise<Espacio> => {
  return db.espacio.create({ data: espacio });
};
