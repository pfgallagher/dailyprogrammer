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
var fs_1 = require("fs");
var util_1 = require("../lib/util");
var toHexString = function (n) { return n.toString(16).toUpperCase(); };
var readAsHex = function (path) { return __awaiter(_this, void 0, void 0, function () {
    var fileContents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.readFile(path)];
            case 1:
                fileContents = _a.sent();
                util_1.chunkArr(__spread(fileContents), 16)
                    .map(function (hexArr) { return hexArr.map(function (hexVal) { return toHexString(hexVal).padStart(2, "0"); }); })
                    .forEach(function (hexArr, i) {
                    return console.log(toHexString(i).padStart(8, "0") + " " + hexArr.join(" "));
                });
                return [2 /*return*/];
        }
    });
}); };
readAsHex("easy-117.ts"); // ->
// 00000000 69 6D 70 6F 72 74 20 7B 20 70 72 6F 6D 69 73 65
// 00000001 73 20 7D 20 66 72 6F 6D 20 22 66 73 22 3B 0A 69
// 00000002 6D 70 6F 72 74 20 7B 20 63 68 75 6E 6B 41 72 72
// 00000003 20 7D 20 66 72 6F 6D 20 22 2E 2F 6C 69 62 2F 75
// 00000004 74 69 6C 22 3B 0A 0A 63 6F 6E 73 74 20 74 6F 48
// 00000005 65 78 53 74 72 69 6E 67 20 3D 20 28 6E 3A 20 6E
// 00000006 75 6D 62 65 72 29 3A 20 73 74 72 69 6E 67 20 3D
// 00000007 3E 20 6E 2E 74 6F 53 74 72 69 6E 67 28 31 36 29
// 00000008 2E 74 6F 55 70 70 65 72 43 61 73 65 28 29 3B 0A
// 00000009 0A 63 6F 6E 73 74 20 72 65 61 64 41 73 48 65 78
// 0000000A 20 3D 20 61 73 79 6E 63 20 28 70 61 74 68 3A 20
// 0000000B 73 74 72 69 6E 67 29 3A 20 50 72 6F 6D 69 73 65
// 0000000C 3C 76 6F 69 64 3E 20 3D 3E 20 7B 0A 09 63 6F 6E
// 0000000D 73 74 20 66 69 6C 65 43 6F 6E 74 65 6E 74 73 20
// 0000000E 3D 20 61 77 61 69 74 20 70 72 6F 6D 69 73 65 73
// 0000000F 2E 72 65 61 64 46 69 6C 65 28 70 61 74 68 29 3B
// 00000010 0A 09 28 63 68 75 6E 6B 41 72 72 28 5B 2E 2E 2E
// 00000011 66 69 6C 65 43 6F 6E 74 65 6E 74 73 5D 2C 20 31
// 00000012 36 29 20 61 73 20 6E 75 6D 62 65 72 5B 5D 5B 5D
// 00000013 29 0A 09 09 2E 6D 61 70 28 68 65 78 41 72 72 20
// 00000014 3D 3E 20 68 65 78 41 72 72 2E 6D 61 70 28 68 65
// 00000015 78 56 61 6C 20 3D 3E 20 74 6F 48 65 78 53 74 72
// 00000016 69 6E 67 28 68 65 78 56 61 6C 29 2E 70 61 64 53
// 00000017 74 61 72 74 28 32 2C 20 22 30 22 29 29 29 0A 09
// 00000018 09 2E 66 6F 72 45 61 63 68 28 28 68 65 78 41 72
// 00000019 72 2C 20 69 29 20 3D 3E 0A 09 09 09 63 6F 6E 73
// 0000001A 6F 6C 65 2E 6C 6F 67 28 60 24 7B 74 6F 48 65 78
// 0000001B 53 74 72 69 6E 67 28 69 29 2E 70 61 64 53 74 61
// 0000001C 72 74 28 38 2C 20 22 30 22 29 7D 20 24 7B 68 65
// 0000001D 78 41 72 72 2E 6A 6F 69 6E 28 22 20 22 29 7D 60
// 0000001E 29 2C 0A 09 09 29 3B 0A 7D 3B 0A 0A 72 65 61 64
// 0000001F 41 73 48 65 78 28 22 65 61 73 79 2D 31 31 37 2E
// 00000020 74 73 22 29 3B 0A
