const emptySpace = "-";
type Players = "X" | "O";

const findCountOfTargetInArr = (target: string, arr: string[]): number => {
	let count = 0;
	for (const el of arr) {
		if (el === target) {
			count++;
		}
	}
	return count;
};

const winningMoveExists = (target: string, arr: string[]): boolean =>
	findCountOfTargetInArr(target, arr) === 2 && arr.includes(emptySpace);

const findWinningMove = (
	turn: Players,
	rows: string[][],
	cols: string[][],
	diagonals: string[][],
): [number, number] => {
	const winningRow = rows.findIndex(row => winningMoveExists(turn, row));
	if (winningRow >= 0) {
		const winningColI = rows[winningRow].indexOf(emptySpace);
		return [winningRow, winningColI];
	}
	const winningCol = cols.findIndex(col => winningMoveExists(turn, col));
	if (winningCol >= 0) {
		const winningRowI = cols[winningCol].indexOf(emptySpace);
		return [winningRowI, winningCol];
	}
	const winningDiagonal = diagonals.findIndex(diagonal =>
		winningMoveExists(turn, diagonal),
	);
	if (winningDiagonal >= 0) {
		const relativeWinningDiagonalI = diagonals[winningDiagonal].indexOf(
			emptySpace,
		);
		let absoluteWinningDiagonal: [number, number];
		if (winningDiagonal === 0) {
			absoluteWinningDiagonal =
				relativeWinningDiagonalI === 0
					? [0, 0]
					: relativeWinningDiagonalI === 1
					? [1, 1]
					: [2, 2];
		} else {
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

const checkTicTacToeBoard = (turn: Players, board: string): string => {
	const rows = board.split("\n").map(row => [...row]);
	const cols: string[][] = [[], [], []];
	rows.forEach(row =>
		row.forEach((cell, i) => {
			cols[i].push(cell);
		}),
	);
	const diagonals = [
		[rows[0][0], rows[1][1], rows[2][2]],
		[rows[0][2], rows[1][1], rows[2][0]],
	];
	const result = findWinningMove(turn, rows, cols, diagonals);
	const [r, c] = result;
	if (r < 0 || c < 0) {
		return "No Winning Move!";
	}
	rows[r][c] = turn;
	return rows.map(row => row.join("")).join("\n");
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
