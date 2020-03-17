class ChessGame {
	private board: string[][] = [];
	private blankBoard: string[][] = [];
	private chessPieces: { [notation: string]: string } = {
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
		whiteSquare: "☐",
	};

	constructor(initialState: string) {
		for (let i = 0; i < 8; i++) {
			this.board.push([]);
			for (let j = 0; j < 8; j++) {
				this.board[i].push(
					!((i + j) % 2)
						? this.chessPieces.whiteSquare
						: this.chessPieces.blackSquare,
				);
			}
		}
		this.board.forEach((row, i) => {
			row.unshift((8 - i).toString());
		});
		this.board.push([..." abcdefgh"]);
		this.blankBoard = [...this.board.map(row => [...row])];
		const initialRows = initialState.split("/");
		initialRows.forEach((initialCol, colI) => {
			[...initialCol].forEach((initialRow, rowI) => {
				const assignedPiece = this.chessPieces[initialRow];
				if (assignedPiece) {
					const notation = this.getNotation(rowI, colI);
					this.setSquare(notation, assignedPiece);
				}
			});
		});
	}

	public getBoard = () => this.board.map(row => row.join(" ")).join("\n");

	public makeMove = (notation: string) => {
		const [start, end] = notation.split(/[-x]/);
		const startValue = this.getSquare(start);
		const emptyStartValue = this.getEmptySquare(start);
		if (startValue && emptyStartValue) {
			this.setSquare(end, startValue);
			this.setSquare(start, emptyStartValue);
		}
	};

	private getSquare = (notation: string) => {
		const [row, col] = this.getRowCol(notation);
		if (this.board[row] && this.board[row][col]) {
			return this.board[row][col];
		}
	};

	private getEmptySquare = (notation: string) => {
		const [row, col] = this.getRowCol(notation);
		if (this.blankBoard[row] && this.blankBoard[row][col]) {
			return this.blankBoard[row][col];
		}
	};

	private setSquare = (notation: string, value: string) => {
		const [row, col] = this.getRowCol(notation);
		if (this.getSquare(notation)) {
			this.board[row][col] = value;
		}
	};

	private getNotation = (rowNum: number, colNum: number): string =>
		`${[..."abcdefgh"][rowNum]}${colNum + 1}`;

	private getRowCol = (notation: string): [number, number] => [
		8 - parseInt(notation[1], 10),
		notation[0].charCodeAt(0) - 96,
	];
}

const chessGame = new ChessGame("snbqkbns/pppppppp/8/8/8/8/PPPPPPPP/SNBQKBNS");
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
