import express from "express";
import passport from "passport";
import * as ctr from "../controller/auth.controller";
require("dotenv").config();

const router = express.Router();

// GET - Pagina Auth de Google
router.get("/", ctr.googleLanding);

// GET - Iniciar Auth de Google
router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["email", "profile"],
  })
);

// GET - Callback Auth de Google
router.get(
  "/google/callback/",
  passport.authenticate("google", { session: false }),
  ctr.googleAuthSuccess
);

// GET - Usuario con Sesion Iniciada
router.get("/user", passport.authenticate('jwt', { session: false }), ctr.getUser);

export default router;
