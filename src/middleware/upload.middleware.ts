import multer from "multer";
import { Request, Response, NextFunction } from "express";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (_req, file, cb) {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

const upload = multer({ storage: storage }).single("image");

export function uploadImage(req: Request, res: Response, next: NextFunction) {
  upload(req, res, function (err: any) {
    if (err) {
      return next(err);
    }
    next();
  });
}
