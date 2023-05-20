import { Request, Response } from "express";

export const googleLanding = async (_req: Request, res: Response) => {
  res.send('<a href="/api/auth/google">Authenticate with Google</a>');
};

export const protectedRoute = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
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
