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
      "/api/auth/google/success" ||
      process.env.CUSTOMCONNSTR_GOOGLE_SUCCESS_REDIRECT,
    failureRedirect:
      "/api/auth/google/failure" ||
      process.env.CUSTOMCONNSTR_GOOGLE_FAILURE_REDIRECT,
  })
);

router.get("/google/success", isLoggedIn, ctr.closePopUp);

router.get("/user", isLoggedIn, ctr.getUser);

router.get("/logout", ctr.googleLogout);

router.get("/auth/google/failure", ctr.googleAuthFail);

export default router;
