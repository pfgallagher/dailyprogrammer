"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var v1_1 = __importDefault(require("uuid/v1"));
var winston_1 = __importDefault(require("winston"));
var logger = winston_1["default"].createLogger({
    transports: [new winston_1["default"].transports.Console()]
});
setInterval(function () {
    logger.info(v1_1["default"]());
}, 100);
