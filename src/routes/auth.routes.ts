import express from "express";
import passport from "passport";
import * as ctr from "../controller/auth.controller";
require("dotenv").config();

const router = express.Router();

router.get("/", ctr.googleLanding);

router.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    scope: ["email", "profile"],
  })
);

router.get(
  "/google/callback/",
  passport.authenticate("google", { session: false }),
  ctr.googleAuthSuccess
);

router.get("/user", passport.authenticate('jwt', { session: false }), ctr.getUser);

export default router;
