import { Reservation } from "@prisma/client";
import { db } from "../utils/db.server";
import { ReservationCreate } from "../types";
import { espaciosById } from "./espacio.service";
import { generateAllTimeSlots } from "./timeSlots.service";

export const createReservation = async (
  existingReservations: Reservation[],
  reservation: ReservationCreate
): Promise<Reservation> => {
  const isValid = await isValidSlot(reservation)
  if (!isValid) {
    throw new Error("Time slot not valid.");
  }
  if (isDuplicateSlot(reservation, existingReservations)) {
    throw new Error("Time slot is already booked.");
  }
  const newReservation = await db.reservation.create({ data: reservation });
  return newReservation;
  
};

export const listAllReservaciones =async (): Promise<any[]> => {
  const reservaciones: any[] = await db.reservation.findMany();
  reservaciones.forEach(reservacion => {
    reservacion.date = reservacion.date.toISOString().slice(0, 10);
    reservacion.start_time = reservacion.start_time.toTimeString().slice(0, 8);
    reservacion.end_time = reservacion.end_time.toTimeString().slice(0, 8);
  });
  return reservaciones
}

// Helper functions

function formatTime(date: Date): string {
  return date.toTimeString().slice(0, 5);
}

function isDuplicateSlot(
  reservation: ReservationCreate,
  existingSlots: Reservation[]
): boolean {
  for (const existingSlot of existingSlots) {
    if (
      formatTime(reservation.start_time) ===
        formatTime(existingSlot.start_time) &&
      formatTime(reservation.end_time) ===
        formatTime(existingSlot.end_time)
    ) {
      return true;
    }
  }
  return false;
}

interface TimeSlot {
  start_time: string;
  end_time: string;
}

async function isValidSlot(reservation: ReservationCreate): Promise<boolean> {
  const espacio = await espaciosById([reservation.espacio_id]);
  const validSlots = await generateAllTimeSlots(espacio[0]);
  const timeSlot: TimeSlot = {
    start_time: reservation.start_time.toTimeString().slice(0, 5),
    end_time: reservation.end_time.toTimeString().slice(0, 5)
  };
  for (const slot of validSlots) {
    if (slot.start_time === timeSlot.start_time && slot.end_time === timeSlot.end_time) {
      return true
    }
  }
  return false;
}