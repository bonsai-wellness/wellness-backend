"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (_req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + "-" + Date.now() + "." + extension);
    },
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (_, file, cb) => {
        if (file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg formats allowed."));
        }
    },
}).single("imagen");
function uploadImage(req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.status(400).json(err.message);
        }
        return next();
    });
}
exports.uploadImage = uploadImage;
