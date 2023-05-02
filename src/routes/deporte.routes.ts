import express from "express";
import { uploadImage } from "../middleware/upload.middleware";
import { validator } from "../validator/deporte.validator";
import * as ctr from "../controller/deporte.controller";

const deporteRouter = express.Router();

// GET Routes
deporteRouter.get("/", ctr.apiGetAllDeportes());

// POST Routes
deporteRouter.post("/", uploadImage, validator, ctr.apiCreateDeporte());

export default deporteRouter;
