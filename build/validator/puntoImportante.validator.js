"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const express_validator_1 = require("express-validator");
const validator = () => [(0, express_validator_1.body)("name").isString()];
exports.validator = validator;
