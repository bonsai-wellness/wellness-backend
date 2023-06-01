import express from "express";
import * as ctr from "../controller/puntoImportante.controller";
import { validator } from "../validator/puntoImportante.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const puntoImportanteRouter = express.Router();

// GET routes
puntoImportanteRouter.get("/", jwtAuth(), ctr.apiListPuntoImportante);

// POST routes
puntoImportanteRouter.post(
	"/",
	jwtAuth(),
	validator(),
	ctr.apiCreatePuntoImportante
);

// DELETE routes
puntoImportanteRouter.delete("/:id", jwtAuth(), ctr.apiDeletePuntoImportante);

export default puntoImportanteRouter;
