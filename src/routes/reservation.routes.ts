import express from "express";
import * as ctr from "../controller/reservation.controller";

const reservationRouter = express.Router();

// GET routes
reservationRouter.get("/", ctr.apiListAvailableSlots);
reservationRouter.get("/all", ctr.apiGetReservation)

// POST routes
reservationRouter.post("/", ctr.apiCreateReservation);

export default reservationRouter;
