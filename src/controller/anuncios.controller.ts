import type { Request, Response } from "express";
import { createAnuncio, getAllAnuncios } from "../services/anuncio.service";
import { AnuncioCreate } from "../types";

export const apiGetAllAnuncios = async (_req: Request, res: Response) => {
	try {
		const anuncios = await getAllAnuncios();
		return res.status(200).json(anuncios);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

export const apiCreateAnuncio = async (req: Request, res: Response) => {
	try {
		req.body.imagen = req.body.finalName;
		const anuncio: AnuncioCreate = {
			name: req.body.name,
			description: req.body.description,
			imagen: req.body.imagen,
			is_active: "T",
		};
		const newAnuncio = await createAnuncio(anuncio);
		return res.status(201).json(newAnuncio);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};
