import { NextFunction, Request, Response } from "express";
import { validationResult, body } from "express-validator";
import fs from "fs";
import { isValidTime } from "../utils/stringToDate.utils";

export const validatorEspacio = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Validation (extra fields)
  const allowedFields = [
    "name",
    "code",
    "capacity",
    "time_max",
    "details",
    "espacio_padre_id",
    "open_at",
    "close_at",
    "is_active",
  ];
  const receivedFields = Object.keys(req.body);
  const extraFields = receivedFields.filter(
    (field) => !allowedFields.includes(field)
  );
  if (extraFields.length > 0) {
    return res.status(400).json({
      message: `Extra fields not allowed: ${extraFields.join(", ")}`,
    });
  }
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

export const validatorEspacioBody = [
  body("name").isString(),
  body("code").isString(),
  body("capacity").isInt(),
  body("time_max").isInt(),
  body("details").isString(),
  body("espacio_padre_id").isInt(),
  body("open_at").isString(),
  body("close_at").isString(),
  body("is_active").isString(),
];
