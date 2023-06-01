import type { Request, Response } from "express";
import {
	createDeporte,
	getAllDeportes,
	deleteDeporte,
} from "../services/deporte.service";
import { DeporteCreate } from "../types";

export const apiGetAllDeportes = async (_req: Request, res: Response) => {
	try {
		const espacios = await getAllDeportes();
		return res.status(200).json(espacios);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

export const apiCreateDeporte = async (req: Request, res: Response) => {
	try {
		req.body.imagen = req.body.finalName;
		const deporte: DeporteCreate = {
			name: req.body.name,
			imagen: req.body.imagen,
		};
		const newDeporte = await createDeporte(deporte);
		return res.status(201).json(newDeporte);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};

export const apiDeleteDeporte = async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const deletedDeporte = await deleteDeporte(id);
		return res.status(200).json(deletedDeporte);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
};
