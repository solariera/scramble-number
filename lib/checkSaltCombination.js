"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSaltCombination = void 0;
const trim32bit_1 = require("./trim32bit");
const checkSaltCombination = (salt, _salt) => {
    return (0, trim32bit_1.trim32bit)(salt * _salt) === 1;
};
exports.checkSaltCombination = checkSaltCombination;
