import { transpose } from "../lib/util";

const box = ["+---+", "|   |", "+---+"];
const emptyBox = ["     ", "     ", "     "];

const fillRows = (input: string[][]): string[] =>
	input
		.map(row => row.map(char => (char === "*" ? box : emptyBox)))
		.map((row, i) => transpose(row).map(row => row.join("")))
		.map(row => row.join("\n"));

const cleanRows = (input: string[]): string[] =>
	input.map(row => row.replace(/-\+\+-/g, "----").replace(/\|\|/g, "  "));

const strDiff = (one: string, two: string): string =>
	[...one]
		.map((char, i) =>
			char === "+" && two[i] === "+"
				? "+"
				: char === two[i]
				? " "
				: char === "+"
				? char
				: two[i],
		)
		.join("");

const cleanSides = (input: string[]): string[] =>
	input.map(row => row.replace(/(?<!-)\+(?!-)/g, "|"));

const asciiHouse = (input: string): any => {
	const cleanedRows = cleanRows(
		fillRows(input.split("\n").map(row => [...row])),
	)
		.join("\n")
		.split("\n");
	for (let i = 0; i < cleanedRows.length; i++) {
		const curRow = cleanedRows[i];
		if (i !== 0 && i !== cleanedRows.length - 1) {
			const nextRow = cleanedRows[i + 1];
			if (nextRow) {
				const divider = /\+-+\+/;
				if (divider.test(curRow) && divider.test(nextRow)) {
					cleanedRows.splice(i, 2, strDiff(curRow, nextRow));
				}
			}
		}
	}
	return cleanSides(cleanedRows).join("\n");
};

console.log(asciiHouse("   *  \n  *** \n******"));
//    *
//   ***
// ******
//                +---+
//                |   |
//           +----+   +----+
//           |             |
// +---------+             +----+
// |                            |
// +----------------------------+

console.log(asciiHouse(" * \n***\n***\n***\n***\n***\n***"));
//  *
// ***
// ***
// ***
// ***
// ***
// ***
//      +---+
//      |   |
// +----+   +----+
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// |             |
// +-------------+

console.log(asciiHouse("    **\n*** **\n******"));
// 		**
// *** **
// ******
//                     +--------+
//                     |        |
// +-------------+     |        |
// |             |     |        |
// |             +-----+        |
// |                            |
// +----------------------------+

console.log(
	asciiHouse(
		"***                    ***\n***     **  ***  **    ***\n***   ***************  ***\n***   ***************  ***\n***   ***************  ***\n**************************\n**************************",
	),
);
// ***                    ***
// ***     **  ***  **    ***
// ***   ***************  ***
// ***   ***************  ***
// ***   ***************  ***
// **************************
// **************************
// +-------------+                                                                                                    +-------------+
// |             |                                                                                                    |             |
// |             |                         +--------+          +-------------+          +--------+                    |             |
// |             |                         |        |          |             |          |        |                    |             |
// |             |               +---------+        +----------+             +----------+        +---------+          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             |               |                                                                         |          |             |
// |             +---------------+                                                                         +----------+             |
// |                                                                                                                                |
// |                                                                                                                                |
// |                                                                                                                                |
// +--------------------------------------------------------------------------------------------------------------------------------+
