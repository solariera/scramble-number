"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
exports.random = random;
