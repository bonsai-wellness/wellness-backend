import { body, param } from "express-validator";

export const validatorCreate = () => [
  body("deporte_id").isInt().notEmpty(),
  body("espacio_id").isInt().notEmpty(),
];

export const validatorParams = () => [param("id").notEmpty().isInt().toInt()];
