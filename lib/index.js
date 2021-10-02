"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scramble = void 0;
const multiply32bit_1 = require("./multiply32bit");
const reverse32bit_1 = require("./reverse32bit");
const scramble = (v, salt = 0x1ca7bc5b, _salt = 0x6b5f13d3) => {
    v = (0, multiply32bit_1.multiply32bit)(v ^ salt, salt);
    v = (0, multiply32bit_1.multiply32bit)((0, reverse32bit_1.reverse32bit)(v), _salt);
    v = (0, multiply32bit_1.multiply32bit)((0, reverse32bit_1.reverse32bit)(v), salt);
    return v;
};
exports.scramble = scramble;
