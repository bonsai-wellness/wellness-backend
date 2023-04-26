import { Torneo } from "@prisma/client";
import { db } from "../utils/db.server";
import { TorneoCreate } from "../types";

export const listTorneos = async (): Promise<Torneo[]> => {  
  return db.torneo.findMany({      
    include: {
      deporte: {
        select: {
          name: true
        }
      }
    },
  });  
};

export const createTorneo = async (
  torneo: TorneoCreate
): Promise<Torneo> => {
  return db.torneo.create({ data: torneo });
};
