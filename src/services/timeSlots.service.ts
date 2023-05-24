import { Espacio, Reservation } from "@prisma/client";
import { db } from "../utils/db.server";

interface TimeSlot {
  start_time: string;
  end_time: string;
}

// Functions for getting available time slots
// for each Espacio

export const generateTimeSlotsByEspacios = async (
  espacios: Espacio[],
  date: Date
) => {
  const espaciosTimeSlots = [];
  for (const espacio of espacios) {
    const timeSlots = await generateTimeSlots(espacio, date);
    const newEspacioTimeSlots = {
      id: espacio.espacio_id,
      timeSlots: timeSlots,
    };
    espaciosTimeSlots.push(newEspacioTimeSlots);
  }
  return espaciosTimeSlots;
};

const generateTimeSlots = async (
  espacio: Espacio,
  date: Date
): Promise<TimeSlot[]> => {
  const timeSlots: TimeSlot[] = [];
  const startTime = espacio.open_at;
  const endTime = espacio.close_at;
  const reservationDuration = espacio.reservation_time * 60 * 1000; // Convert minutes to milliseconds

  const usedSlots = await getReservationsByEspacio(espacio.espacio_id, date);

  // Handle scenarios where the end time is earlier than the start time
  if (endTime.getTime() < startTime.getTime()) {
    endTime.setDate(endTime.getDate() + 1); // Increment the end time to the next day
  }

  while (startTime.getTime() + reservationDuration <= endTime.getTime()) {
    const slot: TimeSlot = {
      start_time: formatTime(startTime),
      end_time: formatTime(new Date(startTime.getTime() + reservationDuration)),
    };

    if (!isDuplicateSlot(slot, usedSlots)) {
      timeSlots.push(slot);
    }

    startTime.setTime(startTime.getTime() + reservationDuration);
  }

  return timeSlots;
};

const getReservationsByEspacio = async (
  id: number,
  date: Date
): Promise<Reservation[]> => {
  // Date for setting range
  const limitDate = new Date(date);
  limitDate.setDate(limitDate.getDate() + 1);
  return db.reservation.findMany({
    where: {
      espacio_id: id,
      start_time: { gte: date, lt: limitDate },
    },
  });
};

// Helper functions

function formatTime(date: Date): string {
  return date.toTimeString().slice(0, 5);
}

function isDuplicateSlot(
  slot: TimeSlot,
  existingSlots: Reservation[]
): boolean {
  for (const existingSlot of existingSlots) {
    if (
      slot.start_time === formatTime(existingSlot.start_time) &&
      slot.end_time === formatTime(existingSlot.end_time)
    ) {
      return true;
    }
  }
  return false;
}
