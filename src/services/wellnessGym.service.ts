import { WellnessGym } from "@prisma/client";
import { db } from "../utils/db.server";

export const wellnessGymById = async (
  id: number
): Promise<WellnessGym | null> => {
  return db.wellnessGym.findUnique({
    where: {
      wellnsess_gym_id: id,
    },
  });
};
