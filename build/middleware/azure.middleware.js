"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToBlobStorage = exports.uploadStrategy = void 0;
const storage_blob_1 = require("@azure/storage-blob");
const multer_1 = __importDefault(require("multer"));
require("dotenv").config();
const inMemoryStorage = multer_1.default.memoryStorage();
exports.uploadStrategy = (0, multer_1.default)({ storage: inMemoryStorage }).single("imagen");
const connectionString = process.env.AZURE_BLOB_STRING;
const blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(connectionString);
const uploadToBlobStorage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const containerName = "images";
        const containerClient = blobServiceClient.getContainerClient(containerName);
        if (!req.file) {
            return res.status(500).json({ "error:": "No file recieved" });
        }
        const fileName = req.file.originalname;
        const fileContent = req.file.buffer;
        const finalName = Date.now() + "-" + fileName;
        req.body.finalName = containerName + "/" + finalName;
        const blockBlobClient = containerClient.getBlockBlobClient(finalName);
        yield blockBlobClient.upload(fileContent, fileContent.length);
        return next();
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
});
exports.uploadToBlobStorage = uploadToBlobStorage;
