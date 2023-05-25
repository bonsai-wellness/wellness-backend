import { ReservationUser } from "@prisma/client"
import { db } from "../utils/db.server"

export const creaeteReservationUser = async(user_id: number, reservation_id: number):Promise<ReservationUser> => {
    const newReservationUser = db.reservationUser.create({ data: {
        user_id,
        reservation_id
    }})
    return newReservationUser
}