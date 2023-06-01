import express from "express";
import {
	uploadStrategy,
	uploadToBlobStorage,
} from "../middleware/azure.middleware";
import { validator } from "../validator/anuncio.validator";
import * as ctr from "../controller/anuncios.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const anunciosRouter = express.Router();

// GET Routes
anunciosRouter.get("/", jwtAuth(), ctr.apiGetAllAnuncios);

// POST Routes
anunciosRouter.post(
	"/",
	jwtAuth(),
	uploadStrategy,
	validator,
	uploadToBlobStorage,
	ctr.apiCreateAnuncio
);

// DELETE routes
anunciosRouter.delete("/:id", jwtAuth(), ctr.apiDeleteAnuncio);

export default anunciosRouter;