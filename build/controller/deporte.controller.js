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
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCreateDeporte = exports.apiGetAllDeportes = void 0;
const deporte_service_1 = require("../services/deporte.service");
const apiGetAllDeportes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const espacios = yield (0, deporte_service_1.getAllDeportes)();
        return res.status(200).json(espacios);
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.apiGetAllDeportes = apiGetAllDeportes;
const apiCreateDeporte = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.imagen = req.body.finalName;
        const deporte = {
            name: req.body.name,
            imagen: req.body.imagen,
        };
        const newDeporte = yield (0, deporte_service_1.createDeporte)(deporte);
        return res.status(201).json(newDeporte);
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.apiCreateDeporte = apiCreateDeporte;
