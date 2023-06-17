import express from "express";
import * as ctr from "../controller/wellnessLog.controller";
import { validator } from "../validator/wellnessLog.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const wellnessLogRouter = express.Router();

// GET - Trae registros de entradas y salidas
wellnessLogRouter.get("/", jwtAuth(), ctr.apiListWellnessLog);

// POST - Crea un registro de entrada y salida
wellnessLogRouter.post("/", validator(), ctr.apiCreateWellnessLog);

export default wellnessLogRouter;
