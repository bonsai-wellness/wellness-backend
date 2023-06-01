import { ReservationUser } from "@prisma/client";
import { db } from "../utils/db.server";

export const createReservationUser = async (
  user_id: number,
  reservation_id: number
): Promise<ReservationUser> => {
  const newReservationUser = db.reservationUser.create({
    data: {
      user_id,
      reservation_id,
    },
  });
  return newReservationUser;
};

export const listUserReservations = async (id_user: number) => {
  const reservations: any[] = await db.$queryRaw`
    DECLARE @DateTimeInMexicoCity DATETIMEOFFSET = SWITCHOFFSET(CONVERT(DATETIMEOFFSET, GETDATE()), '-06:00');
    SELECT ReservationUser.reservation_id, R2.start_time, R2.end_time, R2.date, U.name,E.espacio_id, E.name, EP.name, EP.code, EP.map_url
    FROM ReservationUser
    LEFT JOIN [User] U on U.id_user = ReservationUser.user_id
    LEFT JOIN Reservation R2 on R2.reservation_id = ReservationUser.reservation_id
    LEFT JOIN Espacio E on E.espacio_id = R2.espacio_id
    LEFT JOIN EspacioPadre EP on E.espacio_padre_id = EP.espacio_padre_id
    WHERE u.id_user = ${id_user} and R2.date >= CONVERT(DATE, @DateTimeInMexicoCity)
  `;
  reservations.forEach((reservacion) => {
    reservacion.date = reservacion.date.toISOString().slice(0, 10);
    reservacion.start_time = reservacion.start_time.toTimeString().slice(0, 8);
    reservacion.end_time = reservacion.end_time.toTimeString().slice(0, 8);
  });
  return reservations;
};
