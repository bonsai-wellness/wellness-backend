import { NextFunction, Request, Response } from "express";
import { validationResult, body } from "express-validator";

const validatorAnuncio = (req: Request, res: Response, next: NextFunction) => {
  // Validation (data types)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  return next();
};

export const validator = [body("name").isString().notEmpty(), validatorAnuncio];
