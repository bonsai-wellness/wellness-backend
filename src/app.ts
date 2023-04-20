// Libraries
import express from "express";
import cors from "cors";
require("dotenv").config();

// Route imports
import authRouter from "./routes/auth.routes";
import espacioRouter from "./routes/espacio.routes";
import espacioPadreRouter from "./routes/espacioPadre.routes";
import moment from "moment-timezone";

const app = express();

if (!process.env.PORT) {
  console.log("Specify PORT on .env file");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

// Middlewares
app.use(express.json()); // Middleware to parse req.body to a json format

// Config
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
moment.tz.setDefault("America/Mexico_City");

// Routes
app.use("/api/auth", authRouter);
app.use("/api/espacio", espacioRouter);
app.use("/api/espacio-padre", espacioPadreRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
