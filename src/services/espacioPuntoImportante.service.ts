import { EspacioPuntoImportante } from "@prisma/client";
import { db } from "../utils/db.server";
import { EspacioPuntoImportanteCreate } from "../types";

export const puntosImportantesByEspacioId = async (
  id: number
): Promise<any> => {
  return db.$queryRaw`
      SELECT PI.name, EPI.created_at, EPI.updated_at
      FROM PuntoImportante PI
      JOIN EspacioPuntoImportante EPI on PI.punto_importante_id = EPI.punto_importante_id
      WHERE EPI.espacio_id = ${id};
    `;
};

export const createEspacioPuntoImportante = async (
  espacioPuntoImportante: EspacioPuntoImportanteCreate
): Promise<EspacioPuntoImportante> => {
  return db.espacioPuntoImportante.create({ data: espacioPuntoImportante });
};
