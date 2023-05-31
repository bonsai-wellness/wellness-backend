import express from "express";
import * as ctr from "../controller/espacio.controller";
import {
  uploadStrategy,
  uploadToBlobStorage,
} from "../middleware/azure.middleware";
import {
  validatorCreate,
  validatorParams,
} from "../validator/espacio.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const espacioRouter = express.Router();

// GET routes
espacioRouter.get("/", jwtAuth(), ctr.apiListEspacios);

espacioRouter.get(
  "/espacio-padre/:id",
  jwtAuth(),
  validatorParams,
  ctr.apiEspaciosByPadreId
);

// POST routes
espacioRouter.post(
  "/",
  jwtAuth(),
  uploadStrategy,
  validatorCreate,
  uploadToBlobStorage,
  ctr.apiCreateEspacio
);

export default espacioRouter;
