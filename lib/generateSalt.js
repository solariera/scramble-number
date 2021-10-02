"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSalt = void 0;
const randomSalt_1 = require("./randomSalt");
const inverseSalt_1 = require("./inverseSalt");
const generateSalt = () => {
    const salt = (0, randomSalt_1.randomSalt)();
    const _salt = (0, inverseSalt_1.inverseSalt)(salt);
    if (_salt === undefined)
        return undefined;
    return [salt, _salt];
};
exports.generateSalt = generateSalt;
