"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaoZedong = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Chinese_1 = require("../Chinese");
class MaoZedong extends Leader_1.default {
    static civilization() {
        return Chinese_1.default;
    }
    name() {
        return 'Mao Zedong';
    }
}
exports.MaoZedong = MaoZedong;
exports.default = MaoZedong;
//# sourceMappingURL=MaoZedong.js.map