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
var inquirer = require("inquirer");
var askCommand = function () {
    var command = {
        message: "Command:",
        name: "command",
        type: "input"
    };
    return inquirer.prompt(command);
};
var hasWon = false;
var theAdventureOfTheBarrenMoor = function () { return __awaiter(_this, void 0, void 0, function () {
    var grid, command;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                grid = makeGrid();
                console.log("You awaken to find yourself in a barren moor.  Try \"look\"");
                _a.label = 1;
            case 1:
                if (!!hasWon) return [3 /*break*/, 3];
                return [4 /*yield*/, askCommand()];
            case 2:
                command = _a.sent();
                switch (command.command) {
                    case "look":
                        console.log("\nGray foggy clouds float oppressively close to you, \nreflected in the murky gray water which reaches up your shins.\nSome black plants barely poke out of the shallow water.\nTry \"north\",\"south\",\"east\", or \"west\".\nYou notice a small watch-like device in your left hand.\nIt has hands like a watch, but the hands don't seem to tell time.\n");
                    case "north":
                    case "south":
                    case "east":
                    case "west":
                        grid = movePlayer(grid, command.command);
                        if (!hasWon) {
                            console.log("The dial reads '" + findDistance(grid) + "m'.");
                        }
                        if (hasWon) {
                            break;
                        }
                }
                return [3 /*break*/, 1];
            case 3:
                console.log("\nThe dial reads '0m'.\nYou see a box sitting on the plain.\nIt's filled with treasure!\nYou win!\nThe end.\n");
                return [2 /*return*/];
        }
    });
}); };
var makeGrid = function () {
    var grid = [];
    for (var i = 0; i < 11; i++) {
        var row = Array(11).fill(0);
        grid.push(row);
    }
    var treasureStartLocations = [[0, 0], [0, 10], [10, 0], [10, 10]];
    var randomStart = Math.floor(Math.random() * 4);
    var _a = __read(treasureStartLocations[randomStart], 2), treasureX = _a[0], treasureY = _a[1];
    grid[treasureX][treasureY] = 2;
    grid[5][5] = 1; // Player starts at middle
    return grid;
};
var findCoords = function (grid, target) {
    var y = grid.findIndex(function (row) { return row.includes(target); });
    var x = grid[y].findIndex(function (column) { return column === target; });
    return [x, y];
};
var findDistance = function (grid) {
    var _a = __read(findCoords(grid, 2), 2), treasureX = _a[0], treasureY = _a[1];
    var _b = __read(findCoords(grid, 1), 2), playerX = _b[0], playerY = _b[1];
    return Math.abs(treasureX - playerX) + Math.abs(treasureY - playerY);
};
var isValidPosition = function (x, y) {
    return [x, y].every(function (coord) { return coord >= 0 && coord <= 10; });
};
var checkIfWin = function (directionX, directionY, grid) {
    var _a = __read(findCoords(grid, 2), 2), treasureX = _a[0], treasureY = _a[1];
    return directionX === treasureX && directionY === treasureY;
};
var movePlayer = function (grid, direction) {
    var _a = __read(findCoords(grid, 1), 2), playerX = _a[0], playerY = _a[1];
    switch (direction) {
        case "north":
            var _b = __read([playerX, playerY - 1], 2), northX = _b[0], northY = _b[1];
            if (checkIfWin(northX, northY, grid)) {
                hasWon = true;
                return;
            }
            if (isValidPosition(northX, northY)) {
                grid[playerY][playerX] = 0;
                grid[northY][northX] = 1;
                break;
            }
        case "south":
            var _c = __read([playerX, playerY + 1], 2), southX = _c[0], southY = _c[1];
            if (checkIfWin(southX, southY, grid)) {
                hasWon = true;
                return;
            }
            if (isValidPosition(southX, southY)) {
                grid[playerY][playerX] = 0;
                grid[southY][southX] = 1;
                break;
            }
        case "west":
            var _d = __read([playerX - 1, playerY], 2), westX = _d[0], westY = _d[1];
            if (checkIfWin(westX, westY, grid)) {
                hasWon = true;
                return;
            }
            if (isValidPosition(westX, westY)) {
                grid[playerY][playerX] = 0;
                grid[westY][westX] = 1;
                break;
            }
        case "east":
            var _e = __read([playerX + 1, playerY], 2), eastX = _e[0], eastY = _e[1];
            if (checkIfWin(eastX, eastY, grid)) {
                hasWon = true;
                return;
            }
            if (isValidPosition(eastX, eastY)) {
                grid[playerY][playerX] = 0;
                grid[eastY][eastX] = 1;
                break;
            }
    }
    return grid;
};
theAdventureOfTheBarrenMoor();
