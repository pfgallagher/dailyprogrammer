import { range } from "../lib/util";

const factorial = (n: number): number =>
	n > 0 ? range(1, n).reduce((a, c) => (a *= c)) : 1;

const pascalTriangleRow = (n: number): number[] =>
	range(0, n).map(k => factorial(n) / (factorial(k) * factorial(n - k)));

const pascalPyramid = (n: number): void =>
	pascalTriangleRow(n - 1)
		.map((triOne, iOne) =>
			pascalTriangleRow(iOne).map(triTwo => triOne * triTwo),
		)
		.forEach((pyramidRow, iTwo) => {
			console.log(`${" ".repeat(n - 1 - iTwo)}${pyramidRow.join(" ")}`);
		});

pascalPyramid(1);
// 1
console.log("\n");
pascalPyramid(2);
//  1
// 1 1
console.log("\n");
pascalPyramid(3);
//   1
//  2 2
// 1 2 1
console.log("\n");
pascalPyramid(4);
//    1
//   3 3
//  3 6 3
// 1 3 3 1
console.log("\n");
pascalPyramid(5); // Close enough; not going to bother with fixing the spacing for multi-digit numbers.
//       1
//     4  4
//    6  12 6
//  4  12 12 4
// 1  4  6  4  1
