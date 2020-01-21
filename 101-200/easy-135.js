"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) { throw new TypeError("Generator is already executing."); }
        while (_) { try {
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
        }
        if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) { return o; }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i.return)) { m.call(i); }
        }
        finally { if (e) { throw e.error; } }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) { ar = ar.concat(__read(arguments[i])); }
    return ar;
};
var _this = this;
exports.__esModule = true;
var inquirer = require("inquirer");
var util_1 = require("../lib/util");
var selectRandomEl = function (arr) {
    return Math.floor(Math.random() * arr.length);
};
var askForRange = function () {
    var input = {
        message: "Enter a space-delimited range:",
        name: "rangeResponse",
        type: "input"
    };
    return inquirer.prompt(input);
};
var askProblem = function (problem) {
    var input = {
        message: "What is " + problem + "?",
        name: "problemResponse",
        type: "input"
    };
    return inquirer.prompt(input);
};
var arithmetic = function () { return __awaiter(_this, void 0, void 0, function () {
    var rangeResponse, rangeArr, selectedRange, possibleOperands, i, randomOperation, problemText, correctAnswer, problemResponse, formattedAnswer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, askForRange()];
            case 1:
                rangeResponse = (_a.sent()).rangeResponse;
                if (rangeResponse === "q") {
                    return [2 /*return*/];
                }
                rangeArr = rangeResponse.length
                    ? rangeResponse.split(" ").map(function (num) { return parseInt(num, 10); })
                    : [0, 10];
                selectedRange = util_1.range.apply(void 0, __spread(rangeArr));
                possibleOperands = [];
                for (i = 0; i < 4; i++) {
                    possibleOperands.push(selectedRange[selectRandomEl(selectedRange)]);
                }
                randomOperation = function () { return ["+", "-", "*"][selectRandomEl(util_1.range(0, 2))]; };
                problemText = possibleOperands[0] + " " + randomOperation() + " " + possibleOperands[1] + " " + randomOperation() + " " + possibleOperands[2] + " " + randomOperation() + " " + possibleOperands[3] + " ";
                correctAnswer = Function("return " + problemText)();
                console.log(problemText, correctAnswer);
                return [4 /*yield*/, askProblem(problemText)];
            case 2:
                problemResponse = (_a.sent()).problemResponse;
                if (problemResponse === "q") {
                    return [2 /*return*/];
                }
                formattedAnswer = parseInt(problemResponse, 10);
                if (formattedAnswer === correctAnswer) {
                    console.log("Correct!");
                }
                else {
                    console.log("Incorrect...");
                }
                arithmetic();
                return [2 /*return*/];
        }
    });
}); };
arithmetic();
