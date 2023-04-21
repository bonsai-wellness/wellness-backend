import { NextFunction, Request, Response } from "express";
import { validationResult, body } from "express-validator";
import fs from "fs";

export const validatorDeporte = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Validation (extra fields)
  const allowedFields = ["name"];
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
  // Validation (file)
  if (!req.files?.length) {
    return res.status(400).json({ error: "No file (imagen) was recieved" });
  }
  next();
};

export const validatorDeporteBody = [body("name").isString()];
