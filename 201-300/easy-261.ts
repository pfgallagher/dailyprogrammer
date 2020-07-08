import { chunkArr, transpose, getMajorDiagonals, sum } from "../lib/util";

const isMagicSquare = (numArr: number[]): boolean => {
	const rows = chunkArr(numArr, 3) as number[][];
	return [...rows, ...transpose(rows), ...getMajorDiagonals(rows)].every(
		arr => sum(arr) === 15,
	);
};

console.log(isMagicSquare([8, 1, 6, 3, 5, 7, 4, 9, 2]));
// true
console.log(isMagicSquare([2, 7, 6, 9, 5, 1, 4, 3, 8]));
// true
console.log(isMagicSquare([3, 5, 7, 8, 1, 6, 4, 9, 2]));
// false
console.log(isMagicSquare([8, 1, 6, 7, 5, 3, 4, 9, 2]));
// false
