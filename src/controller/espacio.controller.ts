import { Espacio } from "../types";
import { db } from "../utils/db.server";

export const listEspacios = async(): Promise<Espacio[]> => {
  return db.espacio.findMany();
};