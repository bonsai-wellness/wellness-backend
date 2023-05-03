"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidTime = exports.stringToTime = void 0;
const moment_1 = __importDefault(require("moment"));
const stringToTime = (timeString) => {
    const momentTime = (0, moment_1.default)(timeString, "HH:mm:ss");
    return momentTime.toDate();
};
exports.stringToTime = stringToTime;
const isValidTime = (timeString) => {
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    return timeRegex.test(timeString);
};
exports.isValidTime = isValidTime;
