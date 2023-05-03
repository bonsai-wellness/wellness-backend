"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Libraries
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
// Route imports
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const espacio_routes_1 = __importDefault(require("./routes/espacio.routes"));
const espacioPadre_routes_1 = __importDefault(require("./routes/espacioPadre.routes"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const deporte_routes_1 = __importDefault(require("./routes/deporte.routes"));
const espacioDeporte_routes_1 = __importDefault(require("./routes/espacioDeporte.routes"));
const torneo_routes_1 = __importDefault(require("./routes/torneo.routes"));
const puntoImportante_routes_1 = __importDefault(require("./routes/puntoImportante.routes"));
const espacioPuntoImportante_routes_1 = __importDefault(require("./routes/espacioPuntoImportante.routes"));
const wellnessLog_routes_1 = __importDefault(require("./routes/wellnessLog.routes"));
const app = (0, express_1.default)();
if (!process.env.PORT) {
    console.log("Specify PORT on .env file");
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
// Middlewares
app.use(express_1.default.json()); // Middleware to parse req.body to a json format
app.use(express_1.default.urlencoded({ extended: true }));
// Config
app.use((0, cors_1.default)());
app.use("/public", express_1.default.static("public"));
moment_timezone_1.default.tz.setDefault("America/Mexico_City");
// Routes
app.use("/api/auth", auth_routes_1.default);
app.use("/api/espacio", espacio_routes_1.default);
app.use("/api/espacio-padre", espacioPadre_routes_1.default);
app.use("/api/deporte", deporte_routes_1.default);
app.use("/api/espacio-deporte", espacioDeporte_routes_1.default);
app.use("/api/torneo", torneo_routes_1.default);
app.use("/api/punto-importante", puntoImportante_routes_1.default);
app.use("/api/espacio-punto-importante", espacioPuntoImportante_routes_1.default);
app.use("/api/wellness-log", wellnessLog_routes_1.default);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
function signalHandler() {
    process.exit();
}
process.on("SIGINT", signalHandler);
process.on("SIGTERM", signalHandler);
process.on("SIGQUIT", signalHandler);
