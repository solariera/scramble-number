"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.egcd = void 0;
const egcd = (a, b) => {
    if (a === 0)
        return [b, 0, 1];
    const [g, y, x] = (0, exports.egcd)(b % a, a);
    return [g, x - Math.floor(b / a) * y, y];
};
exports.egcd = egcd;
