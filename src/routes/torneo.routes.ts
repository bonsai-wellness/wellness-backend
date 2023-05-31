import express from "express";
import {
  uploadStrategy,
  uploadToBlobStorage,
} from "../middleware/azure.middleware";
import * as ctr from "../controller/torneo.controller";
import { validatorCreate } from "../validator/torneo.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const torneoRouter = express.Router();

// GET routes
torneoRouter.get("/", jwtAuth(), ctr.apiListTorneos);

// POST routes
torneoRouter.post(
  "/",
  jwtAuth(),
  uploadStrategy,
  validatorCreate,
  uploadToBlobStorage,
  ctr.apiCreateTorneo
);

// DELETE routes
torneoRouter.delete("/:id", jwtAuth(), ctr.apiDeleteTorneo);

export default torneoRouter;
