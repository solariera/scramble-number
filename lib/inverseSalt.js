"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseSalt = void 0;
const egcd_1 = require("./egcd");
const inverseSalt = (a, m = 0x100000000) => {
    const [g, x] = (0, egcd_1.egcd)(a, m);
    if (g !== 1)
        return undefined;
    return x % m;
};
exports.inverseSalt = inverseSalt;
