import { Torneo } from "@prisma/client";
import { db } from "../utils/db.server";
// import { TorneoCreate } from "../types";

export const listTorneos = async (): Promise<any> => {  
  // return db.torneo.findMany({      
  //   include: {
  //     deporte: true,
  //   },
  // });
  return db.torneo.findMany();
};

// export const espaciosByPadreId = async (id: number): Promise<Torneo[]> => {
//   return db.espacio.findMany({
//     where: {
//       espacio_padre_id: id,
//     },
//   });
// };

// export const createEspacio = async (
//   espacio: EspacioCreate
// ): Promise<Torneo> => {
//   return db.espacio.create({ data: espacio });
// };

