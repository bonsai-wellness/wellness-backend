// Libraries
import express from "express";
import cors from "cors";
require("dotenv").config();

// Route imports
import authRouter from "./routes/auth.routes";
import espacioRouter from "./routes/espacio.routes";
import espacioPadreRouter from "./routes/espacioPadre.routes";
import moment from "moment-timezone";
import deporteRouter from "./routes/deporte.routes";
import espacioDeporteRouter from "./routes/espacioDeporte.routes";
import torneoRouter from "./routes/torneo.routes";
import puntoImportanteRouter from "./routes/puntoImportante.routes";
import espacioPuntoImportanteRouter from "./routes/espacioPuntoImportante.routes";
import wellnessLogRouter from "./routes/wellnessLog.routes";
import wellnessGymRouter from "./routes/wellnessGym.routes";
import anunciosRouter from "./routes/anuncios.routes";

const app = express();

const PORT =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_PORT
    : parseInt(process.env.PORT as string, 10) || 3000;

// Middlewares
app.use(express.json()); // Middleware to parse req.body to a json format
app.use(express.urlencoded({ extended: true }));

// Config
app.use(cors());
app.use("/public", express.static("public"));
moment.tz.setDefault("America/Mexico_City");

// Root path for test
app.get("/", (_req, res) => {
  res.send(`Listening on port ${PORT}`);
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/espacio", espacioRouter);
app.use("/api/espacio-padre", espacioPadreRouter);
app.use("/api/deporte", deporteRouter);
app.use("/api/espacio-deporte", espacioDeporteRouter);
app.use("/api/torneo", torneoRouter);
app.use("/api/punto-importante", puntoImportanteRouter);
app.use("/api/espacio-punto-importante", espacioPuntoImportanteRouter);
app.use("/api/wellness-log", wellnessLogRouter);
app.use("/api/wellness-gym", wellnessGymRouter);
app.use("/api/anuncio", anunciosRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function signalHandler() {
  process.exit();
}

process.on("SIGINT", signalHandler);
process.on("SIGTERM", signalHandler);
process.on("SIGQUIT", signalHandler);

export default app;
