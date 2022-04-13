"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const db_1 = require("./config/db");
const icons_controller_1 = __importDefault(require("./src/controllers/icons.controller"));
const exchange_controller_1 = __importDefault(require("./src/controllers/exchange.controller"));
const Controllers = [
    new icons_controller_1.default,
    new exchange_controller_1.default
];
const app = new app_1.default(Controllers, db_1.connect);
app.listen();
//# sourceMappingURL=server.js.map