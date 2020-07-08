import { transpose, range } from "./lib/util";

class LatinSquare {
	public static isLatinSquare = (size: number, input: string): boolean => {
		const [rows, cols] = LatinSquare.inputToRowsAndCols(size, input);
		return (
			LatinSquare.meetsRequirements(rows, size) &&
			LatinSquare.meetsRequirements(cols, size)
		);
	};

	public static test = () => {
		LatinSquare.runTests();
	};

	private static inputToRowsAndCols = (
		size: number,
		input: string,
	): [string[][], string[][]] => {
		const rows: string[][] = Array(size)
			.fill(0)
			.map<string[]>(() => []);
		input.split(" ").forEach((cell, i) => {
			rows[Math.floor(i / size)].push(cell);
		});
		return [rows, transpose(rows)];
	};

	private static meetsRequirements = (
		arrs: string[][],
		size: number,
	): boolean =>
		LatinSquare.areAllElsUnique(arrs, size) &&
		LatinSquare.containsAllElsInRange(arrs, size);

	private static areAllElsUnique = (arrs: string[][], size: number): boolean =>
		arrs.every(arr => new Set(arr).size === size);

	private static containsAllElsInRange = (
		arrs: string[][],
		size: number,
	): boolean =>
		range(1, size)
			.map(n => n.toString())
			.every(n => arrs.every(arr => arr.includes(n)));

	private static runTests = () => {
		[
			LatinSquare.isLatinSquare(1, "1") === true,
			LatinSquare.isLatinSquare(2, "1 2 2 1") === true,
			LatinSquare.isLatinSquare(3, "1 2 3 3 1 2 2 3 1") === true,
			LatinSquare.isLatinSquare(
				5,
				"1 2 3 4 5 5 1 2 3 4 4 5 1 2 3 3 4 5 1 2 2 3 4 5 1",
			) === true,
			LatinSquare.isLatinSquare(2, "1 3 3 4") === false,
			LatinSquare.isLatinSquare(4, "1 2 3 4 1 3 2 4 2 3 4 1 4 3 2 1") === false,
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

LatinSquare.test();
