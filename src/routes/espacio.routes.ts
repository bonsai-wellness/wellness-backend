import express from "express";
import * as ctr from "../controller/espacio.controller";
import {
	uploadStrategy,
	uploadToBlobStorage,
} from "../middleware/azure.middleware";
import {
	validatorCreate,
	validatorParams,
} from "../validator/espacio.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioRouter = express.Router();

// GET - Lista de Espacios
espacioRouter.get("/", jwtAuth(), ctr.apiListEspacios);

// GET - Lista de Espacios por ID
espacioRouter.get(
	"/espacio-padre/:id",
	jwtAuth(),
	validatorParams,
	ctr.apiEspaciosByPadreId
);

// POST - Crear Espacio Padre
espacioRouter.post(
	"/",
	jwtAuth(),
	uploadStrategy,
	validatorCreate,
	uploadToBlobStorage,
	ctr.apiCreateEspacio
);

// DELETE - Borrar espacio por ID
espacioRouter.delete("/:id", jwtAuth(), ctr.apiDeleteEspacio);

export default espacioRouter;
