import { PuntoImportante } from "@prisma/client";
import { db } from "../utils/db.server";
import { PuntoImportanteCreate } from "../types";

export const listPuntoImportante = async (): Promise<PuntoImportante[]> => {
	return db.puntoImportante.findMany();
};

export const createPuntoImportante = async (
	puntoImportante: PuntoImportanteCreate
): Promise<PuntoImportante> => {
	return db.puntoImportante.create({ data: puntoImportante });
};

export const deletePuntoImportante = async (
	id: number
): Promise<PuntoImportante> => {
	return db.puntoImportante.delete({
		where: {
			punto_importante_id: id,
		},
	});
};
