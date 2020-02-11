"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var inquirer = require("inquirer");
var askForNumber = function () {
    var input = {
        message: "Enter a number:",
        name: "num",
        type: "input"
    };
    return inquirer.prompt(input);
};
var pickRandomNumber = function () { return Math.round(Math.random() * 100); };
var printIntro = function () {
    return console.log("Welcome to the Guess-That-Number game! I have already picked a number from 1\u2013100. Please make a guess or type \"exit\" to quit.");
};
var guessThatNumber = function () { return __awaiter(_this, void 0, void 0, function () {
    var randomNumber, won, num;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                randomNumber = pickRandomNumber();
                printIntro();
                won = false;
                _a.label = 1;
            case 1:
                if (!!won) return [3 /*break*/, 3];
                return [4 /*yield*/, askForNumber()];
            case 2:
                num = (_a.sent()).num;
                if (num === "exit") {
                    return [2 /*return*/];
                }
                num = parseInt(num, 10);
                if (/[^0-9]/g.test(num)) {
                    console.log("You must enter a number.");
                }
                else if (num < randomNumber) {
                    console.log("Wrong; that number is below my number.");
                }
                else if (num > randomNumber) {
                    console.log("Wrong; that number is above my number.");
                }
                else {
                    won = true;
                }
                return [3 /*break*/, 1];
            case 3:
                console.log("Correct; that is my number, you win!");
                return [2 /*return*/];
        }
    });
}); };
guessThatNumber();