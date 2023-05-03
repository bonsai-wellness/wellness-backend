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
exports.espaciosByDeporteId = exports.createEspacioDeporte = void 0;
const db_server_1 = require("../utils/db.server");
const createEspacioDeporte = (espacioDeporte) => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.db.espacioDeporte.create({ data: espacioDeporte });
});
exports.createEspacioDeporte = createEspacioDeporte;
const espaciosByDeporteId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db_server_1.db.espacioDeporte.findMany({
        select: {
            espacio: true,
        },
        where: {
            deporte_id: id,
        },
    });
    return data.map((item) => item.espacio);
});
exports.espaciosByDeporteId = espaciosByDeporteId;
