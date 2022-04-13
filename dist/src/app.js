"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {connect} from '../config/db';
const cors_1 = __importDefault(require("cors"));
class App {
    constructor(controllers, connect) {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        connect();
        this.initializeControllers(controllers);
    }
    ;
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/api/', controller.router);
        });
    }
    listen() {
        this.app.listen(3008, () => {
            console.log(`connect server`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map