import express from "express";
import * as ctr from "../controller/puntoImportante.controller";
import { validator } from "../validator/puntoImportante.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const puntoImportanteRouter = express.Router();

// GET - Lista de Puntos Importantes
puntoImportanteRouter.get("/", jwtAuth(), ctr.apiListPuntoImportante);

// POST - Crear Punto Importante
puntoImportanteRouter.post(
	"/",
	jwtAuth(),
	validator(),
	ctr.apiCreatePuntoImportante
);

// DELETE - Borrar punto importante
puntoImportanteRouter.delete("/:id", jwtAuth(), ctr.apiDeletePuntoImportante);

export default puntoImportanteRouter;
