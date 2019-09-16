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
var _this = this;
exports.__esModule = true;
var fs_1 = require("fs");
var util_1 = require("./lib/util");
var unscrambler = function (word) { return __awaiter(_this, void 0, void 0, function () {
    var validWords, validWordArr, unscrambledWords;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.readFile("./easy-105-data.txt", "utf-8")];
            case 1:
                validWords = _a.sent();
                validWordArr = validWords.split("\r\n");
                unscrambledWords = validWordArr.filter(function (validWord) {
                    return __spread(word).every(function (char) { return validWord.includes(char); }) &&
                        !util_1.difference(__spread(word).sort(), __spread(validWord).sort()).length &&
                        word.length === validWord.length;
                });
                return [2 /*return*/, unscrambledWords];
        }
    });
}); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    return __generator(this, function (_0) {
        switch (_0.label) {
            case 0:
                _b = (_a = console).log;
                return [4 /*yield*/, unscrambler("ramrtuaegd")];
            case 1:
                _b.apply(_a, [_0.sent()]); // dramaturge
                _d = (_c = console).log;
                return [4 /*yield*/, unscrambler("elloh")];
            case 2:
                _d.apply(_c, [_0.sent()]); // hello
                _f = (_e = console).log;
                return [4 /*yield*/, unscrambler("dgo")];
            case 3:
                _f.apply(_e, [_0.sent()]); // dog, god
                _h = (_g = console).log;
                return [4 /*yield*/, unscrambler("wrtie")];
            case 4:
                _h.apply(_g, [_0.sent()]); // twier, write
                _k = (_j = console).log;
                return [4 /*yield*/, unscrambler("tei")];
            case 5:
                _k.apply(_j, [_0.sent()]); // tie
                _m = (_l = console).log;
                return [4 /*yield*/, unscrambler("sned")];
            case 6:
                _m.apply(_l, [_0.sent()]); // dens, ends, send, sned
                _p = (_o = console).log;
                return [4 /*yield*/, unscrambler("nerdowtu")];
            case 7:
                _p.apply(_o, [_0.sent()]); // undertow
                _r = (_q = console).log;
                return [4 /*yield*/, unscrambler("trerdmay")];
            case 8:
                _r.apply(_q, [_0.sent()]); // martyred
                _t = (_s = console).log;
                return [4 /*yield*/, unscrambler("etsle")];
            case 9:
                _t.apply(_s, [_0.sent()]); // leets, sleet, steel, stele, teels, teles, tells
                _v = (_u = console).log;
                return [4 /*yield*/, unscrambler("tanotoconin")];
            case 10:
                _v.apply(_u, [_0.sent()]); // connotation, incantation
                _x = (_w = console).log;
                return [4 /*yield*/, unscrambler("lnoesesshomew")];
            case 11:
                _x.apply(_w, [_0.sent()]); // wholesomeness
                _z = (_y = console).log;
                return [4 /*yield*/, unscrambler("woedlreg")];
            case 12:
                _z.apply(_y, [_0.sent()]); // glowered, reglowed
                return [2 /*return*/];
        }
    });
}); })();