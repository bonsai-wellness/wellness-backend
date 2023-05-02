import express from "express";
import type { Request, Response } from "express";

import * as TorneoController from "../controller/torneo.controller";
import * as UploadMiddleware from "../middleware/upload.middleware";
import { stringToTime } from "../utils/stringToDate.utils";
import { TorneoCreate } from "../types";
// import { param, validationResult } from "express-validator";
// import {
// 	validatorEspacioBody,
// 	validatorEspacio,
// } from "../validator/espacio.validator";

const torneoRouter = express.Router();

torneoRouter.get("/", async (_: Request, res: Response) => {
	try {
		const torneos = await TorneoController.listTorneos();
		return res.status(200).json(torneos);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
});

torneoRouter.post(
	"/",
	UploadMiddleware.uploadImage,
	async (req: Request, res: Response) => {
		// Controller
		try {
			req.body.imagen = req.file?.path;
			const torneo: TorneoCreate = {
				name: req.body.name as string,
				evento: req.body.evento as string,
				description: req.body.description as string,
				url: req.body.url as string,
				date_start: stringToTime(req.body.date_start as string),
				date_end: stringToTime(req.body.date_end as string),
				location: req.body.location as string,
				imagen: req.body.imagen as string,
				is_active: req.body.is_active as string,
				deporte_id: parseInt(req.body.deporte_id),
			};
			const newTorneo = await TorneoController.createTorneo(torneo);
			return res.status(201).json(newTorneo);
		} catch (err: any) {
			return res.status(500).json(err.message);
		}
	}
);

torneoRouter.delete("/delete/:id", async(req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	try {
		const deletedTorneo = await TorneoController.deleteTorneo(id);
		return res.status(200).json(deletedTorneo);
	} catch (err: any) {
		return res.status(500).json(err.message);
	}
});

export default torneoRouter;
