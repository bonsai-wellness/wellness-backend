import { Request, Response } from "express";
require("dotenv").config();

export const googleLanding = async (_req: Request, res: Response) => {
  res.send('<a href="/api/auth/google">Authenticate with Google</a>');
};

export const closePopUp = async (_req: Request, res: Response) => {
  const statusCode = 200;
  const popupUrl = process.env.CUSTOMCONNSTR_ANGULAR_BASE_URL || "http://localhost:4200";
  // Send the response to the pop-up window
  res.send(`
    <script>
      window.opener.postMessage({ statusCode: ${statusCode} }, '${popupUrl}');
    </script>
  `);
};

export const googleLogout = async (req: any, res: Response) => {
  req.logout((err: any) => {
    if (err) {
      return res.status(500).json({ message: err });
    }
    req.session.destroy();
    return res.status(200).json({ message: "Logut successfull" });
  });
};

export const googleAuthFail = async (_req: Request, res: Response) => {
  res.status(500).json({ message: "Failed to authenticate with Google" });
};

export const getUser = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};
