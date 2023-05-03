"use strict";
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
exports.createWellnessLog = exports.listWellnessLog = void 0;
const db_server_1 = require("../utils/db.server");
const listWellnessLog = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.db.wellnessLog.findMany();
});
exports.listWellnessLog = listWellnessLog;
const createWellnessLog = (wellnessLog) => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.db.wellnessLog.create({ data: wellnessLog });
});
exports.createWellnessLog = createWellnessLog;
