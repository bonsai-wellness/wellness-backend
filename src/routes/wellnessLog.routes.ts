import express from "express";
import * as ctr from "../controller/wellnessLog.controller";
import { validator } from "../validator/wellnessLog.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const wellnessLogRouter = express.Router();

// GET routes
wellnessLogRouter.get("/", jwtAuth(), ctr.apiListWellnessLog);
wellnessLogRouter.get("/total", jwtAuth(), ctr.apiTotalWellnessLog);

// POST routes
wellnessLogRouter.post("/", validator(), ctr.apiCreateWellnessLog);

export default wellnessLogRouter;
