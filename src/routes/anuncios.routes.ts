import express from "express";
import {
	uploadStrategy,
	uploadToBlobStorage,
} from "../middleware/azure.middleware";
import { validator } from "../validator/anuncio.validator";
import * as ctr from "../controller/anuncios.controller";

const anunciosRouter = express.Router();

// GET Routes
anunciosRouter.get("/", ctr.apiGetAllAnuncios);

// POST Routes
anunciosRouter.post(
	"/",
	uploadStrategy,
	validator,
	uploadToBlobStorage,
	ctr.apiCreateAnuncio
);

// DELETE routes
anunciosRouter.delete("/:id", ctr.apiDeleteAnuncio);

export default anunciosRouter;