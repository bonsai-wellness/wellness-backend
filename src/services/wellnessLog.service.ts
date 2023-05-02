import { WellnessLog } from "@prisma/client";
import { db } from "../utils/db.server";
import { WellnessLogCreate } from "../types";

export const listWellnessLog = async (): Promise<WellnessLog[]> => {
  return db.wellnessLog.findMany();
};

export const createWellnessLog = async (
  wellnessLog: WellnessLogCreate
): Promise<WellnessLog> => {
  return db.wellnessLog.create({ data: wellnessLog });
};
