import express from "express";
import * as ctr from "../controller/reservation.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const reservationRouter = express.Router();

// GET routes
reservationRouter.get("/", jwtAuth(), ctr.apiListAvailableSlots);
reservationRouter.get("/all", jwtAuth(), ctr.apiGetReservation)

// POST routes
reservationRouter.post("/", jwtAuth(), ctr.apiCreateReservation);

export default reservationRouter;
