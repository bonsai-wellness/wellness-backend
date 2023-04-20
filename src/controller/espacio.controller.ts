import { Espacio } from "@prisma/client";
import { db } from "../utils/db.server";

export const listEspacios = async (): Promise<Espacio[]> => {
  return db.espacio.findMany();
};
