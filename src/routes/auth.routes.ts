import express from "express";
import passport from "passport";
import * as ctr from "../controller/auth.controller";
import { isLoggedIn } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", ctr.googleLanding);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/auth/protected",
    failureRedirect: "/api/auth/google/failure",
  })
);

router.get("/protected", isLoggedIn, ctr.protectedRoute);

router.get("/logout", ctr.googleLogout);

router.get("/auth/google/failure", ctr.googleAuthFail);

export default router;
