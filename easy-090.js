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
var makeGrid = function (xSize, ySize, type) {
    var grid = [];
    for (var i = 0; i < ySize; i++) {
        var row = Array(xSize).fill(0);
        grid.push(row);
    }
    if (type === "player") {
        grid[0][0] = 1;
    }
    return grid;
};
var findPlayer = function (grid) {
    var y = grid.findIndex(function (row) { return row.includes(1); });
    var x = grid[y].findIndex(function (column) { return column === 1; });
    return [x, y];
};
var isValidPosition = function (x, y) {
    return [x, y].every(function (coord) { return coord >= 0 && coord <= maxCoord; });
};
var executeCommand = function (command, playerGrid, paintGrid) {
    var _a = __read(findPlayer(playerGrid), 2), playerX = _a[0], playerY = _a[1];
    switch (command) {
        case "N":
            var _b = __read([playerX, playerY - 1], 2), northX = _b[0], northY = _b[1];
            if (isValidPosition(northX, northY)) {
                playerGrid[playerY][playerX] = 0;
                playerGrid[northY][northX] = 1;
                break;
            }
        case "S":
            var _c = __read([playerX, playerY + 1], 2), southX = _c[0], southY = _c[1];
            if (isValidPosition(southX, southY)) {
                playerGrid[playerY][playerX] = 0;
                playerGrid[southY][southX] = 1;
                break;
            }
        case "W":
            var _d = __read([playerX - 1, playerY], 2), westX = _d[0], westY = _d[1];
            if (isValidPosition(westX, westY)) {
                playerGrid[playerY][playerX] = 0;
                playerGrid[westY][westX] = 1;
                break;
            }
        case "E":
            var _e = __read([playerX + 1, playerY], 2), eastX = _e[0], eastY = _e[1];
            if (isValidPosition(eastX, eastY)) {
                playerGrid[playerY][playerX] = 0;
                playerGrid[eastY][eastX] = 1;
                break;
            }
        case "P":
            paintGrid[playerY][playerX] = 1;
    }
    return playerGrid;
};
var paint = function (paintGrid) { return __spread(paintGrid.map(function (row) { return __spread(row).map(function (cell) { return (cell ? "⬛️" : "⬜️"); }); })); };
var maxCoord = 0;
var walkaroundRasterizer = function (xSize, ySize, commandStr) {
    maxCoord = Math.max(xSize, ySize);
    var playerGrid = makeGrid(xSize, ySize, "player");
    var paintGrid = makeGrid(xSize, ySize, "paint");
    __spread(commandStr).forEach(function (command) {
        executeCommand(command, playerGrid, paintGrid);
    });
    return paint(paintGrid);
};
console.log(walkaroundRasterizer(5, 5, "PESPESPESPESPNNNNPWSPWSPWSPWSP"));
