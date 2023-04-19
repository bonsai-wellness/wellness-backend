import express from "express";
import { body, validationResult } from "express-validator";
import type { Request, Response } from "express";

import * as EspacioPadreController from "../controller/espacioPadre.controller";

const espacioPadreRouter = express.Router();

espacioPadreRouter.get("/", async (_: Request, res: Response) => {
  try {
    const espaciosPadre = await EspacioPadreController.listEspaciosPadre();
    return res.status(200).json(espaciosPadre);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
});

espacioPadreRouter.post(
  "/",
  body("name").isString(),
  body("code").isString(),
  body("map_url").isString(),
  body("is_active").isString(),
  async (req: Request, res: Response) => {
    const allowedFields = ["name", "code", "map_url", "is_active"];
    const receivedFields = Object.keys(req.body);
    const extraFields = receivedFields.filter(
      (field) => !allowedFields.includes(field)
    );
    if (extraFields.length > 0) {
      return res.status(400).json({
        message: `Extra fields not allowed: ${extraFields.join(", ")}`,
      });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const espacioPadre = req.body;
      const newEspacioPadre = await EspacioPadreController.createEspacioPadre(
        espacioPadre
      );
      return res.status(201).json(newEspacioPadre);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json(err.message);
    }
  }
);

export default espacioPadreRouter;
