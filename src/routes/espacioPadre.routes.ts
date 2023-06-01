import express from "express";
import * as ctr from "../controller/espacioPadre.controller";
import { validator } from "../validator/espacioPadre.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioPadreRouter = express.Router();

// GET routes

espacioPadreRouter.get("/", jwtAuth(), ctr.apiListEspaciosPadre);

espacioPadreRouter.get(
	"/deporte/:id",
	jwtAuth(),
	ctr.apiListEspaciosPadreByDeporte
);

// POST routes
espacioPadreRouter.post("/", jwtAuth(), validator(), ctr.apiCreateEspacioPadre);

// DELETE routes
espacioPadreRouter.delete("/:id", jwtAuth(), ctr.apiDeleteEspacioPadre);

export default espacioPadreRouter;
