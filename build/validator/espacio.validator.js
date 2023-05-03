"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorParams = exports.validatorCreate = void 0;
const express_validator_1 = require("express-validator");
const stringToDate_utils_1 = require("../utils/stringToDate.utils");
const validatorEspacio = (req, res, next) => {
    // Validation (data types)
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Validation (time format)
    if (!(0, stringToDate_utils_1.isValidTime)(req.body.open_at) || !(0, stringToDate_utils_1.isValidTime)(req.body.close_at)) {
        return res
            .status(400)
            .json({ error: "Invalid time format in open_at, close_at" });
    }
    return next();
};
exports.validatorCreate = [
    (0, express_validator_1.body)("name").isString().notEmpty(),
    (0, express_validator_1.body)("code").isString().notEmpty(),
    (0, express_validator_1.body)("capacity").isInt().notEmpty(),
    (0, express_validator_1.body)("time_max").isInt().notEmpty(),
    (0, express_validator_1.body)("details").isString().notEmpty(),
    (0, express_validator_1.body)("espacio_padre_id").isInt().notEmpty(),
    (0, express_validator_1.body)("open_at").isString().notEmpty(),
    (0, express_validator_1.body)("close_at").isString().notEmpty(),
    (0, express_validator_1.body)("is_active").isString().notEmpty(),
    validatorEspacio,
];
exports.validatorParams = [(0, express_validator_1.param)("id").isInt({ min: 1 })];
