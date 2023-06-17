import express from "express";
import * as ctr from "../controller/reservation.controller";
import { jwtAuth } from "../middleware/auth.middleware";

const reservationRouter = express.Router();

// GET - Lista de horarios por espacio
reservationRouter.get("/", jwtAuth(), ctr.apiListAvailableSlots);
// GET - Lista de todas las reservaciones recientes
reservationRouter.get("/all", jwtAuth(), ctr.apiGetReservation);
// GET - Lista de todas las reservaciones del usuario proximas
reservationRouter.get("/user", jwtAuth(), ctr.apiGetUserReservation);
// GET - Lista de todas las reservaciones de hoy por espacio_id
reservationRouter.get("/today/:espacio_id", jwtAuth(), ctr.apiAdminGetTodayReservation);
// GET - Lista de todas las reservaciones pasadas por espacio_id
reservationRouter.get("/past/:espacio_id", jwtAuth(), ctr.apiAdminGetPastReservation);
// GET - Lista de todas las reservaciones proximas por espacio_id
reservationRouter.get("/next/:espacio_id", jwtAuth(), ctr.apiAdminGetNextReservation);
// GET - Lista de reservacions recientes para dashboard admin
reservationRouter.get("/today", jwtAuth(), ctr.getAllReservations);

// POST - Crear reservacion
reservationRouter.post("/", jwtAuth(), ctr.apiCreateReservation);

// DELETE - Borrar reservacion
reservationRouter.delete("/:reservation_id", jwtAuth(), ctr.apiCancelReservation);

export default reservationRouter;
