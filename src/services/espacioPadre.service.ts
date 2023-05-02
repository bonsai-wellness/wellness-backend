import { EspacioPadre } from "@prisma/client";
import { db } from "../utils/db.server";
import { EspacioPadreCreate } from "../types";

export const listEspaciosPadre = async (): Promise<EspacioPadre[]> => {
  return db.espacioPadre.findMany();
};

export const createEspacioPadre = async (
  espacioPadre: EspacioPadreCreate
): Promise<EspacioPadre> => {
  return db.espacioPadre.create({ data: espacioPadre });
};
