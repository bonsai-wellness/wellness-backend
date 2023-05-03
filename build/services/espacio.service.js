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
exports.createEspacio = exports.espaciosByPadreId = exports.listEspacios = void 0;
const db_server_1 = require("../utils/db.server");
const listEspacios = () => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.db.espacio.findMany();
});
exports.listEspacios = listEspacios;
const espaciosByPadreId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.db.espacio.findMany({
        where: {
            espacio_padre_id: id,
        },
    });
});
exports.espaciosByPadreId = espaciosByPadreId;
const createEspacio = (espacio) => __awaiter(void 0, void 0, void 0, function* () {
    return db_server_1.db.espacio.create({ data: espacio });
});
exports.createEspacio = createEspacio;
