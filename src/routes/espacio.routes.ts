import express from "express";
import * as ctr from "../controller/espacio.controller";
import { uploadImage } from "../middleware/upload.middleware";
import { validatorPOST, validatorParams } from "../validator/espacio.validator";

const espacioRouter = express.Router();

// GET routes
espacioRouter.get("/", ctr.apiListEspacios);
espacioRouter.get("/espacio-padre/:id", validatorParams, ctr.apiEspaciosByPadreId);

// POST routes
espacioRouter.post("/", uploadImage, validatorPOST, ctr.apiCreateEspacio);

export default espacioRouter;
