import express from "express";
import * as ctr from "../controller/espacioDeporte.controller";
import {
  validatorCreate,
  validatorParams,
} from "../validator/espacioDeporte.validator";

const espacioDeporteRouter = express.Router();

// GET routes
espacioDeporteRouter.get("/:id", validatorParams(), ctr.apiEspaciosByDeporteId);

// POST routes
espacioDeporteRouter.post("/", validatorCreate(), ctr.apiCreateEspacioDeporte);

export default espacioDeporteRouter;
