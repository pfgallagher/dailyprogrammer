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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var fs_1 = require("fs");
var inquirer = require("inquirer");
var hangmanPictures = [
    "\n  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========",
    "\n  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n      \n=========",
    "\n  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",
    "\n  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",
    "\n  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",
    "\n  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",
    "\n  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",
];
var Hangman = /** @class */ (function () {
    function Hangman() {
        var _this = this;
        this.triesRemaining = 6;
        this.alreadyGuessed = [];
        this.randomWord = "";
        this.hiddenWord = "";
        this.play = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, guess, guessIndices;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getRandomWord()];
                    case 1:
                        _a.randomWord = _b.sent();
                        this.hiddenWord = "_".repeat(this.randomWord.length);
                        _b.label = 2;
                    case 2:
                        if (!this.triesRemaining) return [3 /*break*/, 4];
                        this.displayStatus();
                        return [4 /*yield*/, this.getGuess()];
                    case 3:
                        guess = _b.sent();
                        if (this.isInvalidGuess(guess)) {
                            return [3 /*break*/, 2];
                        }
                        this.alreadyGuessed.push(guess);
                        guessIndices = this.findCharIndices(guess);
                        if (guessIndices.length) {
                            this.updateHiddenWord(guessIndices, guess);
                        }
                        else {
                            this.triesRemaining--;
                        }
                        if (this.hiddenWord === this.randomWord) {
                            this.displayStatus();
                            console.log("You win!");
                            return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 2];
                    case 4:
                        if (!this.triesRemaining && this.hiddenWord !== this.randomWord) {
                            this.displayStatus();
                            console.log("You lose! The word was " + this.randomWord);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.isInvalidGuess = function (guess) {
            return _this.alreadyGuessed.includes(guess) ||
                /[^a-z]/.test(guess) ||
                guess.length > 1 ||
                !guess;
        };
        this.getWordList = function () { return __awaiter(_this, void 0, void 0, function () {
            var fileContents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs_1.promises.readFile("./easy-189-data.txt", "utf-8")];
                    case 1:
                        fileContents = _a.sent();
                        return [2 /*return*/, fileContents.split("\r\n").filter(function (word) { return word.length <= 7; })];
                }
            });
        }); };
        this.getRandomWord = function () { return __awaiter(_this, void 0, void 0, function () {
            var wordList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWordList()];
                    case 1:
                        wordList = _a.sent();
                        return [2 /*return*/, wordList[Math.floor(Math.random() * wordList.length)]];
                }
            });
        }); };
        this.guessPrompt = function () {
            var input = {
                message: "Guess a letter:",
                name: "guess",
                type: "input"
            };
            return inquirer.prompt(input);
        };
        this.getGuess = function () { return __awaiter(_this, void 0, void 0, function () {
            var guess, lowerCaseGuess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.guessPrompt()];
                    case 1:
                        guess = (_a.sent()).guess;
                        lowerCaseGuess = guess.toLowerCase();
                        return [2 /*return*/, lowerCaseGuess];
                }
            });
        }); };
        this.findCharIndices = function (char) {
            var charIndices = [];
            __spread(_this.randomWord).forEach(function (letter, i) {
                if (letter === char) {
                    charIndices.push(i);
                }
            });
            return charIndices;
        };
        this.updateHiddenWord = function (guessIndices, guess) {
            _this.hiddenWord = __spread(_this.hiddenWord).map(function (char, i) { return (guessIndices.includes(i) ? guess : char); })
                .join("");
        };
        this.displayStatus = function () {
            var hangmanState = hangmanPictures[_this.triesRemaining];
            var alreadyGuessed = _this.alreadyGuessed.join(", ");
            console.log(hangmanState + "\nAlready guessed: " + alreadyGuessed + "\nWord: " + _this.hiddenWord);
        };
    }
    return Hangman;
}());
var game = new Hangman();
game.play();
