"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.apiCreateEspacio = exports.apiEspaciosByPadreId = exports.apiListEspacios = void 0;
const express_validator_1 = require("express-validator");
const service = __importStar(require("../services/espacio.service"));
const stringToDate_utils_1 = require("../utils/stringToDate.utils");
const apiListEspacios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const espacios = yield service.listEspacios();
        return res.status(200).json(espacios);
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.apiListEspacios = apiListEspacios;
const apiEspaciosByPadreId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validation (params)
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const id = parseInt(req.params.id);
    try {
        const espacios = yield service.espaciosByPadreId(id);
        return res.status(200).json(espacios);
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.apiEspaciosByPadreId = apiEspaciosByPadreId;
const apiCreateEspacio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.imagen = req.body.finalName;
        const espacio = {
            name: req.body.name,
            code: req.body.code,
            capacity: parseInt(req.body.capacity),
            time_max: parseInt(req.body.time_max),
            details: req.body.details,
            espacio_padre_id: parseInt(req.body.espacio_padre_id),
            open_at: (0, stringToDate_utils_1.stringToTime)(req.body.open_at),
            close_at: (0, stringToDate_utils_1.stringToTime)(req.body.close_at),
            is_active: req.body.is_active,
            imagen: req.body.imagen,
        };
        const newEspacio = yield service.createEspacio(espacio);
        return res.status(201).json(newEspacio);
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.apiCreateEspacio = apiCreateEspacio;
