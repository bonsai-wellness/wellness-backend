import { EspacioPadre } from "@prisma/client";
import { db } from "../utils/db.server";
import { EspacioPadreCreate } from "../types";

export const listEspaciosPadre = async (): Promise<EspacioPadre[]> => {
  return db.espacioPadre.findMany({
    where: {
      is_active: "T",
    },
  });
};

export const listEspaciosPadreByDeporte = async (
  id: number
): Promise<EspacioPadre[]> => {
  return db.$queryRaw<EspacioPadre[]>`
    SELECT DISTINCT EP.espacio_padre_id, EP.name, EP.code, EP.map_url
    FROM EspacioDeporte
    LEFT JOIN Espacio E on E.espacio_id = EspacioDeporte.espacio_id
    LEFT JOIN EspacioPadre EP on E.espacio_padre_id = EP.espacio_padre_id
    WHERE deporte_id = ${id};
  `;
};

export const createEspacioPadre = async (
  espacioPadre: EspacioPadreCreate
): Promise<EspacioPadre> => {
  return db.espacioPadre.create({ data: espacioPadre });
};

export const deleteEspacioPadre = async (id: number): Promise<EspacioPadre> => {
  return db.espacioPadre.delete({
    where: {
      espacio_padre_id: id,
    },
  });
};
