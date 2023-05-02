import { body } from "express-validator";

export const validator = () => [
  body("wellness_id").isInt().notEmpty(),
  body("type")
    .notEmpty()
    .isString()
    .isIn(["I", "O"])
    .withMessage("Value must be I or O"),
];
