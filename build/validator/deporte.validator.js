"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const express_validator_1 = require("express-validator");
const validatorDeporte = (req, res, next) => {
    // Validation (data types)
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    return next();
};
exports.validator = [(0, express_validator_1.body)("name").isString().notEmpty(), validatorDeporte];
