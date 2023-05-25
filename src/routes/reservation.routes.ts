import express from "express";
import * as ctr from "../controller/reservation.controller";
import { isLoggedIn } from "../middleware/auth.middleware";

const reservationRouter = express.Router();

// GET routes
reservationRouter.get("/", ctr.apiListAvailableSlots);
reservationRouter.get("/all", ctr.apiGetReservation)

// POST routes
reservationRouter.post("/", isLoggedIn, ctr.apiCreateReservation);

export default reservationRouter;
