"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const scheam = new mongoose_1.Schema({
    exchange_id: {
        type: String,
        uppercase: true
    },
    url: {
        type: String,
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('icons', scheam);
//# sourceMappingURL=icons.js.map