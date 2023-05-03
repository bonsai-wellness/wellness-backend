"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const express_validator_1 = require("express-validator");
const validator = () => [
    (0, express_validator_1.body)("name").isString().notEmpty(),
    (0, express_validator_1.body)("code").isString().notEmpty(),
    (0, express_validator_1.body)("map_url").isString().notEmpty(),
    (0, express_validator_1.body)("is_active").isString().notEmpty(),
];
exports.validator = validator;
