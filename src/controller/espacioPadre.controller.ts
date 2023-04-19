import { EspacioPadre } from "@prisma/client";
import { db } from "../utils/db.server";

export const listEspaciosPadre = async (): Promise<EspacioPadre[]> => {
  return db.espacioPadre.findMany();
};

export const createEspacioPadre = async (
  espacioPadre: Omit<EspacioPadre, "espacio_padre_id | created_at | updated_at">
): Promise<EspacioPadre> => {
  return db.espacioPadre.create({ data: espacioPadre });
};
