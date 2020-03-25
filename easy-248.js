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
var makeGrid = function (size) {
    var grid = [];
    var _a = __read(size.split(" ").map(function (el) { return parseInt(el, 10); }), 2), rows = _a[0], cols = _a[1];
    for (var i = 0; i < cols; i++) {
        grid.push([]);
        for (var j = 0; j < rows; j++) {
            grid[i].push([]);
        }
    }
    return grid;
};
var paintImage = function (input, path) { return __awaiter(_this, void 0, void 0, function () {
    var _a, size, instructions, headers, grid, finishedGrid, fileContents;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = __read(input.split("\n")), size = _a[0], instructions = _a.slice(1);
                headers = "P3 " + size + " 255 ";
                grid = makeGrid(size);
                instructions.forEach(function (instruction) {
                    var instArr = instruction.split(" ");
                    var type = instArr[0];
                    var color = instArr.slice(1, 4);
                    switch (type) {
                        case "point": {
                            var _a = __read(instArr.slice(-2).map(function (el) { return parseInt(el, 10); }), 2), x = _a[0], y = _a[1];
                            grid[x][y] = color;
                            break;
                        }
                        case "line": {
                            var _b = __read(instArr
                                .slice(-4, -2)
                                .map(function (el) { return parseInt(el, 10); }), 2), startX = _b[0], startY = _b[1];
                            var _c = __read(instArr.slice(-2).map(function (el) { return parseInt(el, 10); }), 2), endX = _c[0], endY = _c[1];
                            var slope = (endY - startY) / (endX - startX);
                            for (var x = startX < endX ? startX : endX; x < (endX > startX ? endX : startX); x++) {
                                var y = slope * x + startY;
                                if (slope < 0) {
                                    y = parseInt(size.split(" ")[0], 10) + y;
                                }
                                var yFloor = Math.floor(y);
                                var yCeil = Math.ceil(y);
                                grid[x][yFloor] = color;
                                grid[x][yCeil] = color;
                            }
                            break;
                        }
                        case "rect": {
                            var _d = __read(instArr
                                .slice(-4, -2)
                                .map(function (el) { return parseInt(el, 10); }), 2), startX = _d[0], startY = _d[1];
                            var _e = __read(instArr.slice(-2).map(function (el) { return parseInt(el, 10); }), 2), sizeX = _e[0], sizeY = _e[1];
                            var _f = __read([startX + sizeX, startY + sizeY], 2), endX = _f[0], endY = _f[1];
                            for (var i = startY; i < endY; i++) {
                                for (var j = startX; j < endX; j++) {
                                    grid[j][i] = color;
                                }
                            }
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                });
                finishedGrid = grid
                    .flat()
                    .map(function (el) { return (!el.length ? ["0", "0", "0"] : el); })
                    .map(function (el) { return el.join(" "); })
                    .join(" ");
                fileContents = "" + headers + finishedGrid;
                return [4 /*yield*/, fs_1.promises.writeFile(path, fileContents, "utf-8")];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
paintImage("5 3\npoint 0 0 255 0 0\nline 100 100 100 0 2 2 4\nrect 77 0 0 1 3 2 2", "./easy-248-output1.ppm");
paintImage("400 300\nrect 0 0 255 0 0 300 400\nline 255 255 255 0 0 299 399\nline 255 255 255 299 0 0 399\nrect 200 200 0 100 150 100 100\npoint 0 0 0 150 200", "./easy-248-output2.ppm");
