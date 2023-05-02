import express from "express";
import * as ctr from "../controller/puntoImportante.controller";
import { validator } from "../validator/puntoImportante.validator";

const puntoImportanteRouter = express.Router();

// GET routes
puntoImportanteRouter.get("/", ctr.apiListPuntoImportante);

// POST routes
puntoImportanteRouter.post("/", validator(), ctr.apiCreatePuntoImportante);

export default puntoImportanteRouter;
