"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply32bit = void 0;
const trim32bit_1 = require("./trim32bit");
const multiply32bit = (v, salt) => {
    return (0, trim32bit_1.trim32bit)(v * salt);
};
exports.multiply32bit = multiply32bit;
