"use strict";
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
var GameOfLife = /** @class */ (function () {
    function GameOfLife(width, height, input) {
        var _this = this;
        this.simulate = function (n) {
            for (var simulationRounds = 0; simulationRounds < n; simulationRounds++) {
                var gridCopy = __spread(_this.grid).map(function (row) { return __spread(row); });
                for (var row = 0; row < _this.height; row++) {
                    for (var col = 0; col < _this.width; col++) {
                        var cell = gridCopy[row][col];
                        if (cell === "." && _this.livingNeighbors(row, col, gridCopy) === 3) {
                            _this.toggleCell(row, col);
                        }
                        else if (cell === "#") {
                            if (_this.livingNeighbors(row, col, gridCopy) < 2) {
                                _this.toggleCell(row, col);
                            }
                            else if (_this.livingNeighbors(row, col, gridCopy) > 3) {
                                _this.toggleCell(row, col);
                            }
                        }
                    }
                }
            }
        };
        this.printGrid = function () { return _this.grid.forEach(function (row) { return console.log(row.join("")); }); };
        this.livingNeighbors = function (row, col, grid) {
            var neighborCount = 0;
            for (var i = -1; i < 2; i++) {
                for (var j = -1; j < 2; j++) {
                    if ((i || j) && grid[row + i] && grid[row + i][col + j] === "#") {
                        neighborCount++;
                    }
                }
            }
            return neighborCount;
        };
        this.toggleCell = function (row, col) {
            var cell = _this.grid[row][col];
            if (cell) {
                if (cell === ".") {
                    _this.grid[row][col] = "#";
                }
                else {
                    _this.grid[row][col] = ".";
                }
            }
        };
        this.grid = input.split("\n").map(function (row) { return __spread(row); });
        this.width = width;
        this.height = height;
    }
    return GameOfLife;
}());
var game = new GameOfLife(10, 10, "..........\n..........\n..#.......\n...#......\n.###......\n..........\n..........\n..........\n..........\n..........");
game.simulate(7);
game.printGrid();
console.log("\n");
var game2 = new GameOfLife(17, 17, ".................\n.................\n....###...###....\n.................\n..#....#.#....#..\n..#....#.#....#..\n..#....#.#....#..\n....###...###....\n.................\n....###...###....\n..#....#.#....#..\n..#....#.#....#..\n..#....#.#....#..\n.................\n....###...###....\n.................\n.................");
game2.simulate(32);
game2.printGrid();
