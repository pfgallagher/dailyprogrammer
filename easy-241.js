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
var ChessGame = /** @class */ (function () {
    function ChessGame(initialState) {
        var _this = this;
        this.board = [];
        this.blankBoard = [];
        this.chessPieces = {
            B: "♗",
            K: "♔",
            N: "♘",
            P: "♙",
            Q: "♕",
            R: "♖",
            S: "♖",
            b: "♝",
            blackSquare: "☒",
            k: "♚",
            n: "♞",
            p: "♟",
            q: "♛",
            r: "♜",
            s: "♜",
            whiteSquare: "☐"
        };
        this.getBoard = function () { return _this.board.map(function (row) { return row.join(" "); }).join("\n"); };
        this.makeMove = function (notation) {
            var _a = __read(notation.split(/[-x]/), 2), start = _a[0], end = _a[1];
            var startValue = _this.getSquare(start);
            var emptyStartValue = _this.getEmptySquare(start);
            if (startValue && emptyStartValue) {
                _this.setSquare(end, startValue);
                _this.setSquare(start, emptyStartValue);
            }
        };
        this.getSquare = function (notation) {
            var _a = __read(_this.getRowCol(notation), 2), row = _a[0], col = _a[1];
            if (_this.board[row] && _this.board[row][col]) {
                return _this.board[row][col];
            }
        };
        this.getEmptySquare = function (notation) {
            var _a = __read(_this.getRowCol(notation), 2), row = _a[0], col = _a[1];
            if (_this.blankBoard[row] && _this.blankBoard[row][col]) {
                return _this.blankBoard[row][col];
            }
        };
        this.setSquare = function (notation, value) {
            var _a = __read(_this.getRowCol(notation), 2), row = _a[0], col = _a[1];
            if (_this.getSquare(notation)) {
                _this.board[row][col] = value;
            }
        };
        this.getNotation = function (rowNum, colNum) {
            return "" + __spread("abcdefgh")[rowNum] + (colNum + 1);
        };
        this.getRowCol = function (notation) { return [
            8 - parseInt(notation[1], 10),
            notation[0].charCodeAt(0) - 96,
        ]; };
        for (var i = 0; i < 8; i++) {
            this.board.push([]);
            for (var j = 0; j < 8; j++) {
                this.board[i].push(!((i + j) % 2)
                    ? this.chessPieces.whiteSquare
                    : this.chessPieces.blackSquare);
            }
        }
        this.board.forEach(function (row, i) {
            row.unshift((8 - i).toString());
        });
        this.board.push(__spread(" abcdefgh"));
        this.blankBoard = __spread(this.board.map(function (row) { return __spread(row); }));
        var initialRows = initialState.split("/");
        initialRows.forEach(function (initialCol, colI) {
            __spread(initialCol).forEach(function (initialRow, rowI) {
                var assignedPiece = _this.chessPieces[initialRow];
                if (assignedPiece) {
                    var notation = _this.getNotation(rowI, colI);
                    _this.setSquare(notation, assignedPiece);
                }
            });
        });
    }
    return ChessGame;
}());
var chessGame = new ChessGame("snbqkbns/pppppppp/8/8/8/8/PPPPPPPP/SNBQKBNS");
chessGame.makeMove("e2-e4");
chessGame.makeMove("c7-c5");
chessGame.makeMove("f1-c4");
chessGame.makeMove("g8-f6");
chessGame.makeMove("c4xf7");
chessGame.makeMove("e8xf7");
console.log(chessGame.getBoard());
// 8 ♖ ♘ ♗ ♕ ☐ ♗ ☐ ♖
// 7 ♙ ♙ ☒ ♙ ♙ ♔ ♙ ♙
// 6 ☐ ☒ ☐ ☒ ☐ ♘ ☐ ☒
// 5 ☒ ☐ ♙ ☐ ☒ ☐ ☒ ☐
// 4 ☐ ☒ ☐ ☒ ♟ ☒ ☐ ☒
// 3 ☒ ☐ ☒ ☐ ☒ ☐ ☒ ☐
// 2 ♟ ♟ ♟ ♟ ☐ ♟ ♟ ♟
// 1 ♜ ♞ ♝ ♛ ♚ ☐ ♞ ♜
//   a b c d e f g h
