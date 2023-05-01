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

const upload = multer({
  storage: storage,
  fileFilter: (_: Request, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg formats allowed."));
    }
  },
}).single("imagen");

export function uploadImage(req: Request, res: Response, next: NextFunction) {
  upload(req, res, function (err: any) {
    if (err) {
      return res.status(400).json(err.message);
    }
    return next();
  });
}
