import express from "express";
import * as ctr from "../controller/reservation.controller";

const reservationRouter = express.Router();

// GET routes
reservationRouter.get("/", ctr.apiListAvailableSlots);

export default reservationRouter;
