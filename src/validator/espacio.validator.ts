import { NextFunction, Request, Response } from "express";
import { validationResult, body, param } from "express-validator";
import fs from "fs";
import { isValidTime } from "../utils/stringToDate.utils";

const validatorEspacio = (req: Request, res: Response, next: NextFunction) => {
  // Validation (data types)
  const errors = validationResult(req);
  if (!errors.isEmpty() && req.file?.path) {
    return fs.unlink(req.file.path, (err) => {
      if (err) {
        return res.status(400).json(err);
      }
      return res.status(400).json({ errors: errors.array() });
    });
  }
  // Validation (time format)
  if (!isValidTime(req.body.open_at) || !isValidTime(req.body.close_at)) {
    return res
      .status(400)
      .json({ error: "Invalid time format in open_at, close_at" });
  }
  next();
};

export const validatorPOST = [
  body("name").isString().notEmpty(),
  body("code").isString().notEmpty(),
  body("capacity").isInt().notEmpty(),
  body("time_max").isInt().notEmpty(),
  body("details").isString().notEmpty(),
  body("espacio_padre_id").isInt().notEmpty(),
  body("open_at").isString().notEmpty(),
  body("close_at").isString().notEmpty(),
  body("is_active").isString().notEmpty(),
  validatorEspacio,
];

export const validatorParams = [param("id").isInt({ min: 1 })];
