"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trim32bit = void 0;
const trim32bit = (v) => {
    return v & 0x7fffffff;
};
exports.trim32bit = trim32bit;
