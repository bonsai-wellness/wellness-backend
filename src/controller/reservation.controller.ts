import { Request, Response } from "express";
import { espaciosById } from "../services/espacio.service";
import { ReservationCreate } from "../types";
import { createReservation, listAllReservaciones, listNextReservationsByEspacioId, listPastReservationsByEspacioId, listTodayReservationsByEspacioId } from "../services/reservation.service";
import { getReservationsByEspacio, generateTimeSlotsByEspacios } from "../services/timeSlots.service";
import { stringToTime } from "../utils/stringToDate.utils";
import { createReservationUser, listUserReservations } from "../services/reservationUser.service";

export const apiListAvailableSlots = async (req: Request, res: Response) => {
  if (req.query.ids && req.query.date) {
    try {
      const paramIds = req.query.ids ? String(req.query.ids) : '';
      const paramDate = req.query.date ? String(req.query.date) : '';
      const ids = paramIds!.split(',').map(Number);
      const date = new Date(paramDate);
      const espacios = await espaciosById(ids);
      const timeSlots = await generateTimeSlotsByEspacios(espacios, date);
      return res.status(200).json(timeSlots);
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  } else {
    return res.status(401).json("No params")
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
    createReservationUser(user.id_user, newReservation.reservation_id);
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

export const apiGetUserReservation = async (req: any, res: Response) => {
  try {
    const reservaciones = await listUserReservations(Number(req.user.id_user));
    return res.status(200).json(reservaciones);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
}

export const apiAdminGetTodayReservation = async (req: any, res: Response) => {
  try {
    const espacio_id = req.params.espacio_id
    const reservaciones = await listTodayReservationsByEspacioId(Number(espacio_id));
    return res.status(200).json(reservaciones);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
}

export const apiAdminGetNextReservation = async (req: any, res: Response) => {
  try {
    const espacio_id = req.params.espacio_id
    const reservaciones = await listNextReservationsByEspacioId(Number(espacio_id));
    return res.status(200).json(reservaciones);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
}

export const apiAdminGetPastReservation = async (req: any, res: Response) => {
  try {
    const espacio_id = req.params.espacio_id
    const reservaciones = await listPastReservationsByEspacioId(Number(espacio_id));
    return res.status(200).json(reservaciones);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
}
