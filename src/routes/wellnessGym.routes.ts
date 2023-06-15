import * as ctr from "../controller/wellnessGym.controller";
import express from "express";
import { validator } from "../validator/wellnessGym.validator";
import { jwtAuth } from "../middleware/auth.middleware";

// GET routes
const wellnessGymRouter = express.Router();

// This endpoint returns the current amount of people in the gym (wellnessGym <- wellnessLog)
// Use ID = 1, since we only have one location (wellnessGym)
wellnessGymRouter.get("/:id", jwtAuth(), validator(), ctr.apiWellnessGymById);

export default wellnessGymRouter;
