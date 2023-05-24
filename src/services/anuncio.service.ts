import { Aviso } from "@prisma/client";
import { AnuncioCreate } from "../types";
import { db } from "../utils/db.server";

export const getAllAnuncios = async (): Promise<Aviso[]> => {
	return db.aviso.findMany();
};

export const createAnuncio = async (anuncio: AnuncioCreate): Promise<Aviso> => {
	return db.aviso.create({ data: anuncio });
};

export const deleteAnuncio = async (id: number): Promise<Aviso> => {
	return db.aviso.delete({
		where: {
			aviso_id: id,
		},
	});
};
