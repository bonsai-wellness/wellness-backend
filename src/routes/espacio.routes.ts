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

const espacioRouter = express.Router();

// GET routes
espacioRouter.get("/", ctr.apiListEspacios);
espacioRouter.get(
  "/espacio-padre/:id",
  validatorParams,
  ctr.apiEspaciosByPadreId
);

// POST routes
espacioRouter.post(
  "/",
  uploadStrategy,
  validatorCreate,
  uploadToBlobStorage,
  ctr.apiCreateEspacio
);

export default espacioRouter;
