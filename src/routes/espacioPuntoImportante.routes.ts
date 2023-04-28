import express from "express";
import { body, param, validationResult } from "express-validator";
import type { Request, Response } from "express";

import * as EspacioPuntoImportanteController from "../controller/espacioPuntoImportante.controller";

const espacioPuntoImportanteRouter = express.Router();

espacioPuntoImportanteRouter.get(
  "/:id",
  param("id").isInt({ min: 1 }),
  async (req: Request, res: Response) => {
    // Validation (params)
    const errors = validationResult(req);
    if (!errors.isEmpty() && req.file?.path) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(req.params.id);
    try {
      const espacios =
        await EspacioPuntoImportanteController.puntosImportantesByEspacioId(id);
      return res.status(200).json(espacios);
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  }
);

espacioPuntoImportanteRouter.post(
  "/",
  body("espacio_id").isInt(),
  body("punto_importante_id").isInt(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const espacioPuntoImportante = req.body;
      const newEspacioPuntoImportante =
        await EspacioPuntoImportanteController.createEspacioPuntoImportante(
          espacioPuntoImportante
        );
      return res.status(201).json(newEspacioPuntoImportante);
    } catch (err: any) {
      return res.status(500).json(err.message);
    }
  }
);

export default espacioPuntoImportanteRouter;
