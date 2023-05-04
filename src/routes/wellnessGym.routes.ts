import * as ctr from "../controller/wellnessGym.controller";
import express from "express";
import { validator } from "../validator/wellnessGym.validator";

const wellnessGymRouter = express.Router();

wellnessGymRouter.get("/:id", validator(), ctr.apiWellnessGymById);

export default wellnessGymRouter;
