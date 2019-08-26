export {};

const range = (min: number, max: number) =>
	Array(max - min + 1)
		.fill(0)
		.map((_, idx) => idx + min);

const createChessboard = (height: number, width: number): string =>
	range(0, height - 1)
		.map((_, rowIdx) =>
			range(0, width - 1).map((_, squareIdx) =>
				(rowIdx + squareIdx) % 2 ? "⬛️" : "⬜️",
			),
		)
		.join("\n");

console.log(createChessboard(3, 8));
console.log("\n");
console.log(createChessboard(2, 5));
console.log("\n");
console.log(createChessboard(8, 8));
