import { WellnessGym } from "@prisma/client";
import { db } from "../utils/db.server";

// This function returns current amount of people in the gym
// GIVEN -> ID of wellnessGym (number)
// RETURNS -> WellnessGym object
// For porpuses of this project, we will only have one gym, so the ID will always be 1
export const wellnessGymById = async (
  id: number
): Promise<WellnessGym | null> => {
  return db.wellnessGym.findUnique({
    where: {
      wellnsess_gym_id: id,
    },
  });
};
