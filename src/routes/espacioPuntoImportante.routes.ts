import express from "express";
import * as ctr from "../controller/espacioPuntoImportante.controller";
import {
  validatorCreate,
  validatorParams,
} from "../validator/espacioPuntoImportante.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioPuntoImportanteRouter = express.Router();

// GET routes
espacioPuntoImportanteRouter.get(
  "/:id",
  jwtAuth(),
  validatorParams(),
  ctr.apiPuntosImportantesByEspacioId
);

// POST routes
espacioPuntoImportanteRouter.post(
  "/",
  jwtAuth(),
  validatorCreate(),
  ctr.apiCreateEspacioPuntoImportante
);

export default espacioPuntoImportanteRouter;
