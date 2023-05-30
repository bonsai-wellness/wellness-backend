import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
require("dotenv").config();

export const googleLanding = async (_req: Request, res: Response) => {
  res.send('<a href="/api/auth/google">Authenticate with Google</a>');
};

export const googleAuthSuccess = async (req: any, res: Response) => {
  // const statusCode = 200;
  // const popupUrl = process.env.CUSTOMCONNSTR_ANGULAR_BASE_URL || "http://localhost:4200";
  // Send the response to the pop-up window
  // res.send(`
  //   <script>
  //     window.opener.postMessage({ statusCode: ${statusCode} }, '${popupUrl}');
  //   </script>
  // `);

  if (!req.user) {
    return res.status(500).json({ error: "Error with token" });
  }

  const payload = {
    id: req.user.id_user,
    email: req.user.email,
  };

  const token = jwt.sign(
    payload,
    process.env.CUSTOMCONNSTR_JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return res.status(200).json({ access_token: "Bearer " + token });
};

export const getUser = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};
