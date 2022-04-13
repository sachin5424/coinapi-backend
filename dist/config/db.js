"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
//Set up default mongoose connection;
let connect = () => {
    var mongoUrl = "mongodb+srv://sachin:URnb17mqFrVFqnT2@cluster0.fsuun.mongodb.net/coinapi?retryWrites=true&w=majority";
    mongoose_1.default.connect(mongoUrl);
    mongoose_1.default.connection.on('connected', function () {
        console.log("Mongoose default connection is open to ");
    });
    mongoose_1.default.connection.on('error', function (err) {
        console.log("Mongoose default connection has occured " + err + " error");
    });
    mongoose_1.default.connection.on('disconnected', function () {
        console.log("Mongoose default connection is disconnected");
    });
};
exports.connect = connect;
// Router.get('kjdkj',middleware)
//ng run build 
//angular ke ander hm express ko install krke ham 
// aws pr kiya h git se  light shell
//# sourceMappingURL=db.js.map