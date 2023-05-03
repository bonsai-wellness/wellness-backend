"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorCreate = void 0;
const express_validator_1 = require("express-validator");
const validatorTorneo = (req, res, next) => {
    // Validation (data types)
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // Validation (time format)
    // if (!isValidTime(req.body.open_at) || !isValidTime(req.body.close_at)) {
    //   return res
    //     .status(400)
    //     .json({ error: "Invalid time format in open_at, close_at" });
    // }
    return next();
};
exports.validatorCreate = [
    (0, express_validator_1.body)("name").isString().notEmpty(),
    (0, express_validator_1.body)("evento").isString().notEmpty(),
    (0, express_validator_1.body)("description").isString().notEmpty(),
    (0, express_validator_1.body)("url").isString().notEmpty(),
    (0, express_validator_1.body)("date_start").isString().notEmpty(),
    (0, express_validator_1.body)("date_end").isString().notEmpty(),
    (0, express_validator_1.body)("location").isString().notEmpty(),
    (0, express_validator_1.body)("is_active")
        .notEmpty()
        .isString()
        .isIn(["T", "F"])
        .withMessage("Value must be I or O"),
    (0, express_validator_1.body)("deporte_id").isInt().notEmpty(),
    validatorTorneo,
];
