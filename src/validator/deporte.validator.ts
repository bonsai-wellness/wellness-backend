import { NextFunction, Request, Response } from "express";
import { validationResult, body } from "express-validator";
import fs from "fs";

const validatorDeporte = (req: Request, res: Response, next: NextFunction) => {
  // Validation (data types)
  const errors = validationResult(req);
  if (!errors.isEmpty() && req.file?.path) {
    return fs.unlink(req.file.path, (err) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      return res.status(400).json({ errors: errors.array() });
    });
  }
  // Validation (file)
  if (!req.file) {
    return res.status(400).json({ error: "No file (imagen) was recieved" });
  }
  next();
};

export const validator = [body("name").isString(), validatorDeporte];
