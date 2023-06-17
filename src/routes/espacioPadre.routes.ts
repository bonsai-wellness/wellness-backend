import express from "express";
import * as ctr from "../controller/espacioPadre.controller";
import { validator } from "../validator/espacioPadre.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioPadreRouter = express.Router();

// GET - Lista de Espacios Padre
espacioPadreRouter.get("/", jwtAuth(), ctr.apiListEspaciosPadre);

// GET - Lista de Espacios Padre por Deporte
espacioPadreRouter.get(
	"/deporte/:id",
	jwtAuth(),
	ctr.apiListEspaciosPadreByDeporte
);

// POST - Crear Espacio Padre
espacioPadreRouter.post("/", jwtAuth(), validator(), ctr.apiCreateEspacioPadre);

// DELETE - Borrar Espacio Padre
espacioPadreRouter.delete("/:id", jwtAuth(), ctr.apiDeleteEspacioPadre);

export default espacioPadreRouter;
