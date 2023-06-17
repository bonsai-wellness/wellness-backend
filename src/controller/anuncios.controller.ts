import type { Request, Response } from "express";
import { createAnuncio, getAllAnuncios, deleteAnuncio } from "../services/anuncio.service";
import { AnuncioCreate } from "../types";

// Controller - Lista de Anuncios
export const apiGetAllAnuncios = async (_req: Request, res: Response) => {
	try {
		const anuncios = await getAllAnuncios();
		return res.status(200).json(anuncios);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

// Controller - Crear Anuncio
export const apiCreateAnuncio = async (req: Request, res: Response) => {
	try {
		req.body.imagen = req.body.finalName;
		const anuncio: AnuncioCreate = {
			name: req.body.name,
			description: req.body.description,
			url: req.body.url,
			imagen: req.body.imagen,
			is_active: "T",
		};
		const newAnuncio = await createAnuncio(anuncio);
		return res.status(201).json(newAnuncio);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

// Controller - Borrar Anuncio
export const apiDeleteAnuncio = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
	  const deletedAnuncio = await deleteAnuncio(id);
	  return res.status(200).json(deletedAnuncio);
	} catch (err: any) {
	  return res.status(500).json(err.message);
	}
  };