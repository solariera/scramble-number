"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverse32bit = void 0;
const reverse32bit = (v) => {
    v = ((v >> 1) & 0x55555555) | ((v & 0x55555555) << 1);
    v = ((v >> 2) & 0x33333333) | ((v & 0x33333333) << 2);
    v = ((v >> 4) & 0x0f0f0f0f) | ((v & 0x0f0f0f0f) << 4);
    v = ((v >> 8) & 0x00ff00ff) | ((v & 0x00ff00ff) << 8);
    v = (v >> 16) | (v << 16);
    return v;
};
exports.reverse32bit = reverse32bit;
