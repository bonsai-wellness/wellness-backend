import { BlobServiceClient } from "@azure/storage-blob";
import { NextFunction, Request, Response } from "express";
import multer from "multer";
require("dotenv").config();

const inMemoryStorage = multer.memoryStorage();
export const uploadStrategy = multer({ storage: inMemoryStorage }).single(
  "imagen"
);

const connectionString = process.env.CUSTOMCONNSTR_AZURE_BLOB_STRING as string;
const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);

export const uploadToBlobStorage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    await blockBlobClient.upload(fileContent, fileContent.length);

    return next();
  } catch (error: any) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};
