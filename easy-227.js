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
exports.__esModule = true;
var makeGrid = function (size) {
    return Array(size)
        .fill(0)
        .map(function () { return []; })
        .map(function () {
        return Array(size)
            .fill(0)
            .map(function () { return "+"; });
    });
};
var goDirection = function (current, direction) {
    var _a = __read(current, 2), one = _a[0], two = _a[1];
    switch (direction) {
        case "right":
            return [one, two + 1];
        case "left":
            return [one, two - 1];
        case "up":
            return [one - 1, two];
        case "down":
            return [one + 1, two];
        default:
            throw new Error("Invalid direction");
    }
};
var order = {
    right: "up",
    up: "left",
    left: "down",
    down: "right"
};
var squareSpirals = function (size, pointNumberOrCoords) {
    var grid = makeGrid(size);
    var centerI = Math.ceil(size / 2) - 1;
    grid[centerI][centerI] = "1";
    var last = [centerI, centerI];
    var curDirection = "right";
    var counter = 2;
    while (true) {
        var cur = goDirection(last, curDirection);
        var _a = __read(cur, 2), one = _a[0], two = _a[1];
        last = [one, two];
        if (!grid[one][two]) {
            break;
        }
        else {
            grid[one][two] = "" + counter;
            counter++;
        }
        var nextDirection = order[curDirection];
        var next = goDirection(last, nextDirection);
        var _b = __read(next, 2), nextOne = _b[0], nextTwo = _b[1];
        if (grid[nextOne][nextTwo] !== "+") {
            continue;
        }
        else {
            curDirection = nextDirection;
        }
    }
    if (pointNumberOrCoords.indexOf("(") === -1) {
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid.length; j++) {
                if (grid[i][j] === pointNumberOrCoords) {
                    return "(" + (j + 1) + ", " + (i + 1) + ")";
                }
            }
        }
    }
    var _c = __read(pointNumberOrCoords
        .slice(1, -1)
        .split(", ")
        .map(function (coord) { return parseInt(coord, 10); }), 2), targetOne = _c[0], targetTwo = _c[1];
    return grid[targetTwo - 1][targetOne - 1];
};
console.log(squareSpirals(3, "8"));
// (2, 3)
console.log(squareSpirals(7, "(1, 1)"));
// 37
console.log(squareSpirals(11, "50"));
// (10, 9)
console.log(squareSpirals(9, "(6, 8)"));
// 47
/*
    Since my solution is a bit naive, I couldn't get the last two test cases
    working efficiently in the time I allotted for this challenge.
*/
