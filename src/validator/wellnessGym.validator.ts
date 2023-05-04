import { param } from "express-validator";

export const validator = () => [param("id").isInt().notEmpty()];
