import express from "express";
import {
  uploadStrategy,
  uploadToBlobStorage,
} from "../middleware/azure.middleware";
import * as ctr from "../controller/torneo.controller";
import { validatorCreate } from "../validator/torneo.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const torneoRouter = express.Router();

// GET - Lista de torneos
torneoRouter.get("/", jwtAuth(), ctr.apiListTorneos);

// POST - Crear torneo
torneoRouter.post(
  "/",
  jwtAuth(),
  uploadStrategy,
  validatorCreate,
  uploadToBlobStorage,
  ctr.apiCreateTorneo
);

// DELETE - Borrar torneo
torneoRouter.delete("/:id", jwtAuth(), ctr.apiDeleteTorneo);

export default torneoRouter;
