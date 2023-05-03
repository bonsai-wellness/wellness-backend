import express from "express";
import {
  uploadStrategy,
  uploadToBlobStorage,
} from "../middleware/azure.middleware";
import { validator } from "../validator/deporte.validator";
import * as ctr from "../controller/deporte.controller";

const deporteRouter = express.Router();

// GET Routes
deporteRouter.get("/", ctr.apiGetAllDeportes);

// POST Routes
deporteRouter.post(
  "/",
  uploadStrategy,
  validator,
  uploadToBlobStorage,
  ctr.apiCreateDeporte
);

export default deporteRouter;
