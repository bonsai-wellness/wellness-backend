import express from "express";
import {
  uploadStrategy,
  uploadToBlobStorage,
} from "../middleware/azure.middleware";
import * as ctr from "../controller/torneo.controller";
import { validatorCreate } from "../validator/torneo.validator";

const torneoRouter = express.Router();

// GET routes
torneoRouter.get("/", ctr.apiListTorneos);

// POST routes
torneoRouter.post(
  "/",
  uploadStrategy,
  validatorCreate,
  uploadToBlobStorage,
  ctr.apiCreateTorneo
);

// DELETE routes
torneoRouter.delete("/:id", ctr.apiDeleteTorneo);

export default torneoRouter;
