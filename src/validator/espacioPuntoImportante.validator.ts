import { body, param } from "express-validator";

export const validatorParams = () => [param("id").isInt({ min: 1 })];

export const validatorCreate = () => [
  body("espacio_id").isInt(),
  body("punto_importante_id").isInt(),
];
