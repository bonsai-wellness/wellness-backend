import * as ctr from "../controller/wellnessGym.controller";
import express from "express";
import { validator } from "../validator/wellnessGym.validator";
import { jwtAuth } from "../middleware/auth.middleware";

const wellnessGymRouter = express.Router();

wellnessGymRouter.get("/:id", jwtAuth(), validator(), ctr.apiWellnessGymById);

export default wellnessGymRouter;
