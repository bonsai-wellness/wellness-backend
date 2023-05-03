"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverAddress = void 0;
const os_1 = __importDefault(require("os"));
function serverAddress() {
    const ifaces = os_1.default.networkInterfaces();
    let ipAddress = undefined;
    for (const interfaces of Object.values(ifaces)) {
        for (const iface of interfaces) {
            if (iface.family === "IPv4" && iface.internal === false) {
                ipAddress = iface.address;
                break;
            }
        }
        if (ipAddress) {
            break;
        }
    }
    if (ipAddress === undefined) {
        return "";
    }
    return "http://" + ipAddress + ":" + process.env.PORT + "/";
}
exports.serverAddress = serverAddress;
