import express from "express";
import * as ctr from "../controller/espacioPadre.controller";
import { validator } from "../validator/espacioPadre.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioPadreRouter = express.Router();

// GET routes
espacioPadreRouter.get("/", jwtAuth(), ctr.apiListEspaciosPadre);

// POST routes
espacioPadreRouter.post("/", validator(), ctr.apiCreateEspacioPadre);

export default espacioPadreRouter;
