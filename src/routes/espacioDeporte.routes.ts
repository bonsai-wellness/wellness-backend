import express from "express";
import * as ctr from "../controller/espacioDeporte.controller";
import {
  validatorCreate,
  validatorParams,
} from "../validator/espacioDeporte.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioDeporteRouter = express.Router();

// GET routes
espacioDeporteRouter.get("/:id", jwtAuth(), validatorParams(), ctr.apiEspaciosByDeporteId);

// POST routes
espacioDeporteRouter.post("/", jwtAuth(), validatorCreate(), ctr.apiCreateEspacioDeporte);

export default espacioDeporteRouter;
