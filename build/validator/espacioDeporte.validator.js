"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorParams = exports.validatorCreate = void 0;
const express_validator_1 = require("express-validator");
const validatorCreate = () => [
    (0, express_validator_1.body)("deporte_id").isInt().notEmpty(),
    (0, express_validator_1.body)("espacio_id").isInt().notEmpty(),
];
exports.validatorCreate = validatorCreate;
const validatorParams = () => [(0, express_validator_1.param)("id").notEmpty().isInt().toInt()];
exports.validatorParams = validatorParams;
