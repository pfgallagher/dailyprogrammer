var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var emptySpace = "-";
var findCountOfTargetInArr = function (target, arr) {
    var e_1, _a;
    var count = 0;
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var el = arr_1_1.value;
            if (el === target) {
                count++;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1["return"])) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return count;
};
var winningMoveExists = function (target, arr) {
    return findCountOfTargetInArr(target, arr) === 2 && arr.includes(emptySpace);
};
var findWinningMove = function (turn, rows, cols, diagonals) {
    var winningRow = rows.findIndex(function (row) { return winningMoveExists(turn, row); });
    if (winningRow >= 0) {
        var winningColI = rows[winningRow].indexOf(emptySpace);
        return [winningRow, winningColI];
    }
    var winningCol = cols.findIndex(function (col) { return winningMoveExists(turn, col); });
    if (winningCol >= 0) {
        var winningRowI = cols[winningCol].indexOf(emptySpace);
        return [winningRowI, winningCol];
    }
    var winningDiagonal = diagonals.findIndex(function (diagonal) {
        return winningMoveExists(turn, diagonal);
    });
    if (winningDiagonal >= 0) {
        var relativeWinningDiagonalI = diagonals[winningDiagonal].indexOf(emptySpace);
        var absoluteWinningDiagonal = void 0;
        if (winningDiagonal === 0) {
            absoluteWinningDiagonal =
                relativeWinningDiagonalI === 0
                    ? [0, 0]
                    : relativeWinningDiagonalI === 1
                        ? [1, 1]
                        : [2, 2];
        }
        else {
            absoluteWinningDiagonal =
                relativeWinningDiagonalI === 0
                    ? [0, 2]
                    : relativeWinningDiagonalI === 1
                        ? [1, 1]
                        : [2, 0];
        }
        return absoluteWinningDiagonal;
    }
    return [-1, -1];
};
var checkTicTacToeBoard = function (turn, board) {
    var rows = board.split("\n").map(function (row) { return __spread(row); });
    var cols = [[], [], []];
    rows.forEach(function (row) {
        return row.forEach(function (cell, i) {
            cols[i].push(cell);
        });
    });
    var diagonals = [
        [rows[0][0], rows[1][1], rows[2][2]],
        [rows[0][2], rows[1][1], rows[2][0]],
    ];
    var result = findWinningMove(turn, rows, cols, diagonals);
    var _a = __read(result, 2), r = _a[0], c = _a[1];
    if (r < 0 || c < 0) {
        return "No Winning Move!";
    }
    rows[r][c] = turn;
    return rows.map(function (row) { return row.join(""); }).join("\n");
};
console.log(checkTicTacToeBoard("X", "XX-\n-XO\nOO-"));
// XXX
// -XO
// OO-
console.log("\n");
console.log(checkTicTacToeBoard("O", "O-X\n-OX\n---"));
// O-X
// -OX
// --O
console.log("\n");
console.log(checkTicTacToeBoard("X", "XOO\nXOX\n-XO"));
// XOO
// XOX
// XXO
console.log("\n");
console.log(checkTicTacToeBoard("X", "--O\nOXX\n---"));
// No Winning Move!
