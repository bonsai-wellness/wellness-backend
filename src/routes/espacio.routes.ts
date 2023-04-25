import express from "express";
import type { Request, Response } from "express";

import * as EspacioController from "../controller/espacio.controller";
import * as UploadMiddleware from "../middleware/upload.middleware";
import { stringToTime } from "../utils/stringToDate.utils";
import { EspacioCreate } from "../types";
import { param, validationResult } from "express-validator";
import {
	validatorEspacioBody,
	validatorEspacio,
} from "../validator/espacio.validator";

const espacioRouter = express.Router();

espacioRouter.get("/", async (_: Request, res: Response) => {
	try {
		const espacios = await EspacioController.listEspacios();
		return res.status(200).json(espacios);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
});

espacioRouter.get(
	"/espacio-padre/:id",
	param("id").isInt({ min: 1 }),
	async (req: Request, res: Response) => {
		// Validation (params)
		const errors = validationResult(req);
		if (!errors.isEmpty() && req.file?.path) {
			return res.status(400).json({ errors: errors.array() });
		}
		const id = parseInt(req.params.id);
		try {
			const espacios = await EspacioController.espaciosByPadreId(id);
			return res.status(200).json(espacios);
		} catch (err: any) {
			return res.status(500).json(err.message);
		}
	}
);

espacioRouter.post(
	"/",
	UploadMiddleware.uploadImage,
	validatorEspacioBody,
	validatorEspacio,
	async (req: Request, res: Response) => {
		// Controller
		try {
			req.body.imagen = req.file?.path;
			const espacio: EspacioCreate = {
				name: req.body.name as string,
				code: req.body.code as string,
				capacity: parseInt(req.body.capacity),
				time_max: parseInt(req.body.time_max),
				details: req.body.details as string,
				espacio_padre_id: parseInt(req.body.espacio_padre_id),
				open_at: stringToTime(req.body.open_at as string),
				close_at: stringToTime(req.body.close_at as string),
				is_active: req.body.is_active as string,
				imagen: req.body.imagen as string,
			};
			const newEspacio = await EspacioController.createEspacio(espacio);
			return res.status(201).json(newEspacio);
		} catch (err: any) {
			return res.status(500).json(err.message);
		}
	}
);

export default espacioRouter;
