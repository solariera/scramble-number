"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomSalt = void 0;
const random_1 = require("./random");
const randomSalt = () => {
    let salt = (0, random_1.random)(3, 0xffffffff);
    if (salt % 2 === 0)
        salt++;
    return salt;
};
exports.randomSalt = randomSalt;
