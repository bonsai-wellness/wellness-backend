import { Request, Response } from "express";
import { espaciosById } from "../services/espacio.service";
import { ReservationCreate } from "../types";
import { createReservation, listAllReservaciones } from "../services/reservation.service";
import { getReservationsByEspacio, generateTimeSlotsByEspacios } from "../services/timeSlots.service";
import { stringToTime } from "../utils/stringToDate.utils";
import { creaeteReservationUser } from "../services/reservationUser.service";

export const apiListAvailableSlots = async (req: Request, res: Response) => {
  const ids: [number] = req.body.espacio_ids;
  const date: Date = new Date(req.body.date);
  try {
    const espacios = await espaciosById(ids);
    const timeSlots = await generateTimeSlotsByEspacios(espacios, date);
    return res.status(200).json(timeSlots);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiCreateReservation = async (req: Request, res: Response) => {
  try {
    const { espacio_id, date, start_time, end_time } = req.body;
    const reservation: ReservationCreate = {
      date: new Date(date),
      start_time: stringToTime(start_time),
      end_time: stringToTime(end_time),
      espacio_id: espacio_id,
      booked_time: 90
    };
    const existingReservations = await getReservationsByEspacio(
      reservation.espacio_id,
      reservation.date
    );
    const newReservation = await createReservation(
      existingReservations,
      reservation
    );
    const user: any = req.user!
    creaeteReservationUser(user.id_user, newReservation.reservation_id);
    return res.status(201).json(newReservation);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
};

export const apiGetReservation = async (_req: Request, res: Response) => {
  try {
    const reservaciones = await listAllReservaciones();
    return res.status(200).json(reservaciones);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
}