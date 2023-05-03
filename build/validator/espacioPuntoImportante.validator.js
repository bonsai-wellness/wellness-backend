"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorCreate = exports.validatorParams = void 0;
const express_validator_1 = require("express-validator");
const validatorParams = () => [(0, express_validator_1.param)("id").isInt({ min: 1 })];
exports.validatorParams = validatorParams;
const validatorCreate = () => [
    (0, express_validator_1.body)("espacio_id").isInt(),
    (0, express_validator_1.body)("punto_importante_id").isInt(),
];
exports.validatorCreate = validatorCreate;
