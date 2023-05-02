import express from "express";
import * as ctr from "../controller/espacioPuntoImportante.controller";
import {
  validatorCreate,
  validatorParams,
} from "../validator/espacioPuntoImportante.validator";

const espacioPuntoImportanteRouter = express.Router();

// GET routes
espacioPuntoImportanteRouter.get(
  "/:id",
  validatorParams(),
  ctr.apiPuntosImportantesByEspacioId
);

// POST routes
espacioPuntoImportanteRouter.post(
  "/",
  validatorCreate(),
  ctr.apiCreateEspacioPuntoImportante
);

export default espacioPuntoImportanteRouter;
