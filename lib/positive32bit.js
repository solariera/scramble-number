"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positive32bit = void 0;
const positive32bit = (v) => {
    return v & 0x7fffffff;
};
exports.positive32bit = positive32bit;
