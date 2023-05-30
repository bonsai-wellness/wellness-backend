import express from "express";
import passport from "passport";
import * as ctr from "../controller/auth.controller";
import { isLoggedIn } from "../middleware/auth.middleware";
require("dotenv").config();

const router = express.Router();

router.get("/", ctr.googleLanding);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect:
      "/api/auth/google/success",
    failureRedirect:
      "/api/auth/google/failure"
  })
);

router.get("/google/success", ctr.closePopUp);

router.get("/user", isLoggedIn, ctr.getUser);

router.get("/logout", ctr.googleLogout);

router.get("/auth/google/failure", ctr.googleAuthFail);

export default router;
