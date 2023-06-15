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


interface TotalWellnessLog {
  type: string;
  total: number;
}

// This function returns all the history data of inputs and outputs from the database (SINCE THE BEGINNING OF TIME)
export const totalWellnessLog = async (): Promise<TotalWellnessLog[]> => {
  let totalI = 0;
  let totalO = 0;
  const wellnessLog = await db.wellnessLog.findMany();
  wellnessLog.forEach((log) => {
    if (log.type === "I") {
      totalI += 1;
    } else {
      totalO += 1;
    }
  }
  );
  return [{ type: "I", total: totalI }, { type: "O", total: totalO }];
}

// This functions returns data inputs and outputs from all the database
export const totalWellnessLogToday = async (): Promise<TotalWellnessLog[]> => {
  let totalI = 0;
  let totalO = 0;
  const wellnessLog = await db.wellnessLog.findMany({
    where: {
      created_at: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
        lt: new Date(new Date().setHours(23, 59, 59, 999)),
      },
    },
  });
  
  wellnessLog.forEach((log) => {
    if (log.type === "I") {
      totalI += 1;
    } else {
      totalO += 1;
    }
  }
  );
  return [{ type: "I", total: totalI }, { type: "O", total: totalO }];
}

