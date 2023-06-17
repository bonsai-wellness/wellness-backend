import express from "express";
import {
	uploadStrategy,
	uploadToBlobStorage,
} from "../middleware/azure.middleware";
import { validator } from "../validator/deporte.validator";
import * as ctr from "../controller/deporte.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const deporteRouter = express.Router();

// GET - Lista de Deportes
deporteRouter.get("/", jwtAuth(), ctr.apiGetAllDeportes);

// POST - Crear Deporte
deporteRouter.post(
	"/",
	jwtAuth(),
	uploadStrategy,
	validator,
	uploadToBlobStorage,
	ctr.apiCreateDeporte
);

// DELETE - Borrar Deporte por ID
deporteRouter.delete("/:id", jwtAuth(), ctr.apiDeleteDeporte);

export default deporteRouter;
