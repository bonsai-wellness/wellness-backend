import express from "express";
import * as ctr from "../controller/reservation.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const reservationRouter = express.Router();

// GET routes
reservationRouter.get("/", jwtAuth(), ctr.apiListAvailableSlots);
reservationRouter.get("/all", jwtAuth(), ctr.apiGetReservation);
reservationRouter.get("/user", jwtAuth(), ctr.apiGetUserReservation);
reservationRouter.get("/today/:espacio_id", jwtAuth(), ctr.apiAdminGetTodayReservation);
reservationRouter.get("/past/:espacio_id", jwtAuth(), ctr.apiAdminGetPastReservation);
reservationRouter.get("/next/:espacio_id", jwtAuth(), ctr.apiAdminGetNextReservation);
reservationRouter.get("/today", jwtAuth(), ctr.getAllReservations);

// POST routes
reservationRouter.post("/", jwtAuth(), ctr.apiCreateReservation);

// DELETE routes
reservationRouter.delete("/:reservation_id", jwtAuth(), ctr.apiCancelReservation);

export default reservationRouter;
