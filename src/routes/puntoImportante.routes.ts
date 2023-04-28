import express from "express";
import { body, validationResult } from "express-validator";
import type { Request, Response } from "express";

import * as PuntoImportanteController from "../controller/puntoImportante.controller";

const puntoImportanteRouter = express.Router();

puntoImportanteRouter.get("/", async (_: Request, res: Response) => {
  try {
    const puntosImportantes =
      await PuntoImportanteController.listPuntoImportante();
    return res.status(200).json(puntosImportantes);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
});

puntoImportanteRouter.post(
  "/",
  body("name").isString(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const puntoImportante = req.body;
      const newPuntoImportante =
        await PuntoImportanteController.createPuntoImportante(puntoImportante);
      return res.status(201).json(newPuntoImportante);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json(err.message);
    }
  }
);

export default puntoImportanteRouter;
