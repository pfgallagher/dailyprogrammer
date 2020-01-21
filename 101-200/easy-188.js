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
var _this = this;
exports.__esModule = true;
var fs_1 = require("fs");
var determineDateFormat = function (dateString) {
    if (dateString.includes("-")) {
        return "ISO";
    }
    if (dateString.includes("/")) {
        return "slash";
    }
    if (dateString.includes("#")) {
        return "hash";
    }
    if (dateString.includes("*")) {
        return "asterisk";
    }
    var yearLength = dateString.split(" ")[2].length;
    if (yearLength === 4) {
        return "fullWithFourDigits";
    }
    if (yearLength === 2) {
        return "fullWithTwoDigits";
    }
};
var dateParamsToDateString = function (year, month, date) {
    return new Date(year, parseInt(month, 10) - 1, parseInt(date, 10))
        .toISOString()
        .slice(0, 10);
};
var partialYearToFullYear = function (year) {
    return parseInt(year, 10) >= 50
        ? parseInt("19" + year, 10)
        : parseInt("20" + year, 10);
};
var monthAbbreviationMap = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
};
var normalizeDate = function (incorrectDate, dateFormat) {
    switch (dateFormat) {
        case "ISO":
            return incorrectDate;
        case "slash": {
            var _a = __read(incorrectDate.split("/"), 3), month = _a[0], date = _a[1], year = _a[2];
            var fullYear = partialYearToFullYear(year);
            return dateParamsToDateString(fullYear, month, date);
        }
        case "hash": {
            var _b = __read(incorrectDate.split("#"), 3), month = _b[0], year = _b[1], date = _b[2];
            var fullYear = partialYearToFullYear(year);
            return dateParamsToDateString(fullYear, month, date);
        }
        case "asterisk": {
            var _c = __read(incorrectDate.split("*"), 3), date = _c[0], month = _c[1], year = _c[2];
            return dateParamsToDateString(parseInt(year, 10), month, date);
        }
        case "fullWithTwoDigits": {
            var _d = __read(incorrectDate.split(" "), 3), month = _d[0], date = _d[1], year = _d[2];
            var monthNumberString = monthAbbreviationMap[month];
            var fullYear = partialYearToFullYear(year);
            return dateParamsToDateString(fullYear, monthNumberString, date);
        }
        case "fullWithFourDigits": {
            var _e = __read(incorrectDate.split(" "), 3), month = _e[0], date = _e[1], year = _e[2];
            var monthNumberString = monthAbbreviationMap[month];
            return dateParamsToDateString(parseInt(year, 10), monthNumberString, date);
        }
        default:
            return "Unknown Format";
    }
};
var correctDates = function () { return __awaiter(_this, void 0, void 0, function () {
    var incorrectDates, normalizedDates;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.readFile("./easy-188-data.txt", "utf-8")];
            case 1:
                incorrectDates = _a.sent();
                normalizedDates = incorrectDates
                    .split("\n")
                    .map(function (incorrectDate) {
                    var dateFormat = determineDateFormat(incorrectDate);
                    if (dateFormat) {
                        return normalizeDate(incorrectDate, dateFormat);
                    }
                })
                    .join("\n");
                return [4 /*yield*/, fs_1.promises.writeFile("./easy-188-result.txt", normalizedDates)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
correctDates();
