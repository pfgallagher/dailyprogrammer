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
// I'm using Invidious to retrieve comments, since YouTube's API has locked up considerably over the years.
var axios_1 = require("axios");
var fs_1 = require("fs");
var buildRegex = function (wordList) {
    return new RegExp("(" + wordList
        .split("\r\n")
        .filter(function (word) { return !/\W/.test(word) && word; })
        .join("|") + ")", "gi");
};
var scrape = function (youtubeURL, numPagesToScrape) { return __awaiter(_this, void 0, void 0, function () {
    var scrapedComments, continuation, i, data, comments, commentsString, happyWords, sadWords, happyMatches, sadMatches, sentiments, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                scrapedComments = [];
                continuation = "";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < numPagesToScrape)) return [3 /*break*/, 5];
                return [4 /*yield*/, axios_1["default"].get("https://invidio.us/api/v1/comments/" + youtubeURL + "?format=json&hl=en-US" + (continuation ? "&continuation=" + continuation : ""))];
            case 3:
                data = (_a.sent()).data;
                comments = data.comments.map(function (comment) { return comment.content; });
                comments.forEach(function (comment) {
                    scrapedComments.push(comment);
                });
                continuation = data.continuation;
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                commentsString = scrapedComments.join(" ");
                return [4 /*yield*/, fs_1.promises.readFile("./easy-190-happy-words.txt", "utf-8")];
            case 6:
                happyWords = _a.sent();
                return [4 /*yield*/, fs_1.promises.readFile("./easy-190-sad-words.txt", "utf-8")];
            case 7:
                sadWords = _a.sent();
                happyMatches = commentsString.match(buildRegex(happyWords));
                sadMatches = commentsString.match(buildRegex(sadWords));
                sentiments = happyMatches &&
                    sadMatches &&
                    (happyMatches.length > sadMatches.length
                        ? "mostly happy"
                        : sadMatches.length > happyMatches.length
                            ? "mostly sad"
                            : "neutral");
                return [2 /*return*/, "Based on a sample size of " + scrapedComments.length + " comments, the sentiments for this video are " + sentiments + ". There were " + (happyMatches ? happyMatches.length : 0) + " happy keywords and " + (sadMatches ? sadMatches.length : 0) + " sad keywords."];
            case 8:
                error_1 = _a.sent();
                return [2 /*return*/, "Scraping failed:\n" + error_1];
            case 9: return [2 /*return*/];
        }
    });
}); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, scrape("dQw4w9WgXcQ", 2)];
            case 1:
                result = _a.sent();
                console.log(result);
                return [2 /*return*/];
        }
    });
}); })();
