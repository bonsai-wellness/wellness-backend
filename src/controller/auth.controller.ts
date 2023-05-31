import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
require("dotenv").config();

export const googleLanding = async (_req: Request, res: Response) => {
  res.send('<a href="/api/auth/google">Authenticate with Google</a>');
};

export const googleAuthSuccess = async (req: any, res: Response) => {
  const popupUrl = process.env.CUSTOMCONNSTR_ANGULAR_BASE_URL || "http://localhost:4200";
  
  if (!req.user) {
    return res.status(500).json({ error: "Error with token" });
  }

  const payload = {
    id: req.user.id_user,
    email: req.user.email,
    is_admin: req.user.is_admin
  };

  const token = jwt.sign(
    payload,
    process.env.CUSTOMCONNSTR_JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  return res.send(`
    <script>
      const statusCode = 200;
      const jwtToken = '${token}';
      const data = { statusCode, jwtToken };
      window.opener.postMessage(data, '${popupUrl}');
    </script>
  `);

};

export const getUser = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};
