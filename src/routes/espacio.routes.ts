import express from "express";
import type { Request, Response } from "express";

import * as EspacioController from "../controller/espacio.controller";

const espacioRouter = express.Router();

espacioRouter.get("/", async (_: Request, res: Response) => {
  try {
    const espacios = await EspacioController.listEspacios();
    return res.status(200).json(espacios);
  } catch (err: any) {
    return res.status(500).json(err.message);
  }
});

export default espacioRouter;