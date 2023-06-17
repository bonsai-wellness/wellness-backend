import { validationResult } from "express-validator";
import type { Request, Response } from "express";
import * as service from "../services/espacioPadre.service";

// Controller - Lista de Espacios Padre
export const apiListEspaciosPadre = async (_req: Request, res: Response) => {
	try {
		const espaciosPadre = await service.listEspaciosPadre();
		return res.status(200).json(espaciosPadre);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

// Controller - Lista Espacios Padre filtrados por deporte_id
export const apiListEspaciosPadreByDeporte = async (
	req: Request,
	res: Response
) => {
	try {
		const id: number = Number(req.params.id);
		const espaciosPadre = await service.listEspaciosPadreByDeporte(id);
		return res.status(200).json(espaciosPadre);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

// Controller - Crear Espacio Padre
export const apiCreateEspacioPadre = async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const espacioPadre = req.body;
		const newEspacioPadre = await service.createEspacioPadre(espacioPadre);
		return res.status(201).json(newEspacioPadre);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

// Controller - Borrar Espacio Padre
export const apiDeleteEspacioPadre = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const deletedEspacioPadre = await service.deleteEspacioPadre(id);
		return res.status(200).json(deletedEspacioPadre);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};
