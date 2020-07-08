import { chunkArr, zip } from "../lib/util";

const getCell = (input: string): string =>
	[...input]
		.reduce(
			(acc: string[], _, i, arr) =>
				!i
					? [arr.join(""), ...acc]
					: i === arr.length - 1
					? [...acc, [...input].reverse().join("")]
					: [
							...acc,
							`${input[i]}${" ".repeat(input.length - 2)}${
								[...input].reverse().join("")[i]
							}`,
					  ],
			[],
		)
		.map(row => row.split("").join(" "))
		.join("\n");

const getReversedCell = (input: string): string =>
	getCell(input).split("\n").reverse().join("\n");

const cellToArr = (cell: string): string[][] =>
	cell.split("\n").map(row => [...row]);

const merge = (cellOne: string, cellTwo: string): string =>
	zip(
		cellToArr(cellOne),
		cellToArr(cellTwo).map(word => word.map((char, i) => (!i ? "" : char))),
	)
		.map(el => el.flat().join(""))
		.join("\n");

const reduceMerge = (arr: string[]): string =>
	arr.reduce((a, c) => merge(a, c));

const empty2DArr = (width: number, height: number): string[][] =>
	chunkArr(Array(width * height).fill(""), width);

const joinCells = (rows: string[][]) =>
	rows
		.map(row => reduceMerge(row).split("\n"))
		.flatMap((row, i, arr) =>
			i !== arr.length - 1 ? row.filter((_, j) => j !== row.length - 1) : row,
		);

const rektangle = (input: string, width: number, height: number): string =>
	joinCells(
		empty2DArr(width, height).map((row, i) =>
			row.map((_, j) =>
				width * height === 1 || (i + j) % 2
					? getCell(input)
					: getReversedCell(input),
			),
		),
	).join("\n");

console.log(rektangle("REKT", 1, 1), "\n");
//     R E K T
//     E     K
//     K     E
//     T K E R
console.log(rektangle("REKT", 2, 2), "\n");
//     T K E R E K T
//     K     E     K
//     E     K     E
//     R E K T K E R
//     E     K     E
//     K     E     K
//     T K E R E K T
console.log(rektangle("TACOCAT", 4, 4));
// T A C O C A T A C O C A T A C O C A T A C O C A T
// A           A           A           A           A
// C           C           C           C           C
// O           O           O           O           O
// C           C           C           C           C
// A           A           A           A           A
// T A C O C A T A C O C A T A C O C A T A C O C A T
// A           A           A           A           A
// C           C           C           C           C
// O           O           O           O           O
// C           C           C           C           C
// A           A           A           A           A
// T A C O C A T A C O C A T A C O C A T A C O C A T
// A           A           A           A           A
// C           C           C           C           C
// O           O           O           O           O
// C           C           C           C           C
// A           A           A           A           A
// T A C O C A T A C O C A T A C O C A T A C O C A T
// A           A           A           A           A
// C           C           C           C           C
// O           O           O           O           O
// C           C           C           C           C
// A           A           A           A           A
// T A C O C A T A C O C A T A C O C A T A C O C A T
