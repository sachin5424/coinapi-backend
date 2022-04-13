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
const icons_1 = __importDefault(require("../model/icons"));
const axios_1 = __importDefault(require("axios"));
class IconsService {
    constructor() {
        this.SaveCoinService().then((data) => {
            console.log("ok");
        });
    }
    getIconData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const data = yield axios_1.default.get("https://rest.coinapi.io/v1/exchanges/icons/32", { headers: { "X-CoinAPI-Key": "FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9" } });
                    resolve(data.data);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    SaveCoinService() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const IconsData = yield this.getIconData();
                    IconsData.map((item) => __awaiter(this, void 0, void 0, function* () {
                        const data = yield icons_1.default.findOne({ exchange_id: item.exchange_id });
                        if (!data) {
                            yield icons_1.default.create(item);
                        }
                    }));
                    resolve("save");
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
}
exports.default = IconsService;
//# sourceMappingURL=icons.service.js.map