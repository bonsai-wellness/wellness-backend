import express from "express";
import * as ctr from "../controller/wellnessLog.controller";
import { validator } from "../validator/wellnessLog.validator";

const wellnessLogRouter = express.Router();

// GET routes
wellnessLogRouter.get("/", ctr.apiListWellnessLog);

// POST routes
wellnessLogRouter.post("/", validator(), ctr.apiCreateWellnessLog);

export default wellnessLogRouter;
