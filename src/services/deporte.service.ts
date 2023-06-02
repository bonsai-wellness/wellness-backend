import { Deporte } from "@prisma/client";
import { DeporteCreate } from "../types";
import { db } from "../utils/db.server";

export const getAllDeportes = async (): Promise<Deporte[]> => {
	return db.deporte.findMany();
};

export const createDeporte = async (
	deporte: DeporteCreate
): Promise<Deporte> => {
	return db.deporte.create({ data: deporte });
};

export const deleteDeporte = async (id: number): Promise<Deporte> => {
	return db.deporte.delete({
		where: {
			deporte_id: id,
		},
	});
};
