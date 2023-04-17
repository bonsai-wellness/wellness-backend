"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Librerias
const express_1 = __importDefault(require("express"));
// Inicializamos app
const app = (0, express_1.default)();
// Constantes
const PORT = 5001;
// Middlewares
app.use(express_1.default.json()); // Middleware to parse req.body to a json format 
// Rutas
app.get("/", (_req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
