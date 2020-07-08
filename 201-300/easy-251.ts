import { transpose } from "../lib/util";

const countNonogram = (cells: string[]): number[] => {
	const count: number[] = [0];
	cells.forEach(cell => {
		const lastCounter = count[count.length - 1];
		if (cell === "*") {
			count[count.length - 1]++;
		} else if (lastCounter && cell === " ") {
			count.push(0);
		}
	});
	return count.filter(n => n);
};

const formatNonogram = (
	nonogramCountArr: number[][],
	type: "rows" | "columns",
): string => {
	const mostRows = Math.max(...nonogramCountArr.map(el => el.length));
	const withBlanks: string[][] = Array(mostRows)
		.fill(0)
		.map(() => []);
	nonogramCountArr.forEach(el => {
		for (let i = 0; i < mostRows; i++) {
			const count = el[i];
			if (count) {
				withBlanks[i].push(count.toString());
			} else {
				withBlanks[i].push(" ");
			}
		}
	});
	const formatted = withBlanks.map(formattedArr =>
		formattedArr.map(cell => cell.padEnd(2)),
	);
	return type === "rows"
		? transpose(formatted)
				.map(row => row.reverse().join(" "))
				.join("\n")
		: formatted
				.map(col => col.join(" "))
				.reverse()
				.join("\n");
};

const nonogram = (input: string): string => {
	const rows = input.split("\n").map(row => [...row]);
	return `Columns:\n${formatNonogram(
		transpose(rows).map(col => countNonogram(col)),
		"columns",
	)}\nRows:\n${formatNonogram(
		rows.map(row => countNonogram(row)),
		"rows",
	)}\n`;
};

console.log(nonogram("    *\n   **\n  * *\n *  *\n*****"));
// Columns:
//       1  1
// 1  2  1  1  5
// Rows:
//    1
//    2
// 1  1
// 1  1
//    5
console.log(
	nonogram(
		"    ** *  \n   *****  \n  ******  \n ******** \n**********\n *      * \n * ** * * \n * ** * * \n * **   * \n ******** ",
	),
);
// Columns:
//                   1
//       1  4  4  1  2  1
// 1  7  3  4  5  5  4  5  7  1
// Rows:
//       1  2
//          5
//          6
//          8
//          10
//       1  1
// 1  1  2  1
// 1  1  2  1
//    1  2  1
//          8
console.log(
	nonogram(
		"     ***       \n  **** **      \n ****** ****** \n * **** **    *\n ****** ***  **\n ****** *******\n****** ********\n *   **********\n *   **********\n *   **********\n * * ****  ****\n *** ****  ****\n     ****  ****\n     ****  ****\n     ****  ****",
	),
);
// Columns:
//       1           8
//       3  2        4  9        6  10 10 11
// 1  10 2  6  6  15 1  2  14 8  1  1  1  1  12
// Rows:
//          3
//       2  4
//       6  6
// 1  2  4  1
//    2  3  6
//       7  6
//       8  6
//       10 1
//       10 1
//       10 1
// 4  4  1  1
//    4  4  3
//       4  4
//       4  4
//       4  4
