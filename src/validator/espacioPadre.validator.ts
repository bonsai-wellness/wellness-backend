import { body } from "express-validator";

export const validator = () => [
  body("name").isString().notEmpty(),
  body("code").isString().notEmpty(),
  body("map_url").isString().notEmpty(),
  body("is_active").isString().notEmpty(),
];
