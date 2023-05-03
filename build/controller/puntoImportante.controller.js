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
exports.apiCreatePuntoImportante = exports.apiListPuntoImportante = void 0;
const service = __importStar(require("../services/puntoImportante.service"));
const express_validator_1 = require("express-validator");
const apiListPuntoImportante = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const puntosImportantes = yield service.listPuntoImportante();
        return res.status(200).json(puntosImportantes);
    }
    catch (err) {
        return res.status(500).json(err.message);
    }
});
exports.apiListPuntoImportante = apiListPuntoImportante;
const apiCreatePuntoImportante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const puntoImportante = req.body;
        const newPuntoImportante = yield service.createPuntoImportante(puntoImportante);
        return res.status(201).json(newPuntoImportante);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err.message);
    }
});
exports.apiCreatePuntoImportante = apiCreatePuntoImportante;
