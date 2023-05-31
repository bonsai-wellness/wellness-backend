import express from "express";
import * as ctr from "../controller/espacioPadre.controller";
import { validator } from "../validator/espacioPadre.validator";

const espacioPadreRouter = express.Router();

// GET routes
espacioPadreRouter.get("/", ctr.apiListEspaciosPadre);
espacioPadreRouter.get("/deporte/:id", ctr.apiListEspaciosPadreByDeporte);

// POST routes
espacioPadreRouter.post("/", validator(), ctr.apiCreateEspacioPadre);

export default espacioPadreRouter;
