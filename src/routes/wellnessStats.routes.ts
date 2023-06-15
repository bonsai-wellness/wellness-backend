import express from "express";
import * as ctr from "../controller/puntoImportante.controller";
import { validator } from "../validator/puntoImportante.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const wellnessStatsRouter = express.Router();

// GET routes
wellnessStatsRouter.get("/", jwtAuth(), ctr.apiListPuntoImportante);

// POST routes
wellnessStatsRouter.post(
	"/",
	jwtAuth(),
	validator(),
	ctr.apiCreatePuntoImportante
);

// DELETE routes
wellnessStatsRouter.delete("/:id", jwtAuth(), ctr.apiDeletePuntoImportante);

export default wellnessStatsRouter;
