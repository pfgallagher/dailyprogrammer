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
var fs_1 = require("fs");
var dailyProgrammerPost = "Your program will be responsible for analyzing a small chunk of text, the text of this entire dailyprogrammer description. Your task is to output the distinct words in this description, from highest to lowest count with the number of occurrences for each. Punctuation will be considered as separate words where they are not a part of the word.\n\nThe following will be considered their own words: \" . , : ; ! ? ( ) [ ] { }\n\nFor anything else, consider it as part of a word.\n\nExtra Credit:\n\nProcess the text of the ebook Metamorphosis, by Franz Kafka and determine the top 10 most frequently used words and their counts. (This will help for part 2)\n";
var textAnalyzer = function (text) {
    var analysisObject = {};
    text
        .split(/([ .,:;!?()[\]{}])|[\n\r]/)
        .filter(function (word) { return word && word !== " "; })
        .forEach(function (word) {
        if (analysisObject[word]) {
            analysisObject[word]++;
        }
        else {
            analysisObject[word] = 1;
        }
    });
    return Object.entries(analysisObject).sort(function (a, b) { return b[1] - a[1]; });
};
console.log(textAnalyzer(dailyProgrammerPost));
(function () { return __awaiter(_this, void 0, void 0, function () {
    var metamorphosis;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.readFile("./easy-106-data.txt", "utf-8")];
            case 1:
                metamorphosis = _a.sent();
                console.log(textAnalyzer(metamorphosis));
                return [2 /*return*/];
        }
    });
}); })();
