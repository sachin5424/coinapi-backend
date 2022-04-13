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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Exchange_service_1 = __importDefault(require("../service/Exchange.service"));
const _helper_1 = require("../utils/_helper");
const exchanges_1 = __importDefault(require("../model/exchanges"));
class ExchangeController extends Exchange_service_1.default {
    constructor() {
        super();
        this.router = (0, express_1.Router)();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get('/exchanges', this.ExchangseDataFind);
    }
    ExchangseDataFind(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const search = req.query.search;
                var filter = [];
                search ? filter.push({
                    $match: {
                        exchange_id: new RegExp(search.toUpperCase())
                    }
                }) : {};
                filter.push({
                    $lookup: {
                        from: "icons",
                        localField: "exchange_id",
                        foreignField: "exchange_id",
                        as: "icons"
                    }
                }, { $unwind: "$icons" }, {
                    $addFields: {
                        "url": "$icons.url"
                    }
                }, {
                    $project: { icons: 0 }
                });
                const data = yield (0, _helper_1.aggregate)(exchanges_1.default, filter);
                return res.status(200).json({ status: 200, data });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ status: 500, message: error.message });
            }
        });
    }
}
exports.default = ExchangeController;
//# sourceMappingURL=exchange.controller.js.map