import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const validatorTorneo = (req: Request, res: Response, next: NextFunction) => {
  // Validation (data types)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Validation (time format)
  // if (!isValidTime(req.body.open_at) || !isValidTime(req.body.close_at)) {
  //   return res
  //     .status(400)
  //     .json({ error: "Invalid time format in open_at, close_at" });
  // }
  return next();
};

export const validatorCreate = [
  body("name").isString().notEmpty(),
  body("evento").isString().notEmpty(),
  body("description").isString().notEmpty(),
  body("url").isString().notEmpty(),
  body("date_start").isString().notEmpty(),
  body("date_end").isString().notEmpty(),
  body("location").isString().notEmpty(),
  body("is_active")
    .notEmpty()
    .isString()
    .isIn(["T", "F"])
    .withMessage("Value must be I or O"),
  body("deporte_id").isInt().notEmpty(),
  validatorTorneo,
];
