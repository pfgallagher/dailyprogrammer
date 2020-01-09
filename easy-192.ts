import { transpose } from "./lib/util";

const sumStrings = (terms: string[]): number =>
	terms.map(term => parseInt(term, 10)).reduce((acc, cur) => acc + cur);

const digitLength = (num: number): number => num.toString().length;

const carriedAddition = (input: string): string => {
	const terms = input.split("+");
	const cols: Array<[number | string]> = [];
	terms
		.map(term => [...term.padStart(digitLength(sumStrings(terms)), " ")])
		.forEach(term =>
			term.forEach((digit, i) => {
				const parsed = parseInt(digit, 10);
				const digitOrSpace = !isNaN(parsed) ? parsed : " ";
				if (cols[i]) {
					cols[i].push(digitOrSpace);
				} else {
					cols[i] = [digitOrSpace];
				}
			}),
		);
	const additionRows = cols
		.reverse()
		.map((col, i) => {
			if (i === 0) {
				col.unshift(" ", "-");
			}
			let colSum = col.reduce(
				(acc: number, cur) => (typeof cur === "number" ? acc + cur : acc),
				0,
			);
			const overflow = Math.floor(colSum / 10);
			if (cols[i + 1]) {
				if (overflow) {
					cols[i + 1].unshift(overflow, "-");
				} else {
					cols[i + 1].unshift(" ", "-");
				}
			}
			if (overflow) {
				colSum -= overflow * 10;
			}
			return [...col, "-", colSum, "-"].map(el => el.toString());
		})
		.reverse();
	return transpose(additionRows)
		.map(el => el.join(""))
		.join("\n");
};

console.log(carriedAddition("23+9+66"));
// 1
// --
// 23
//  9
// 66
// --
// 98
// --
console.log("\n");
console.log(carriedAddition("8765+305"));
// 1 1
// ----
// 8765
//  305
// ----
// 9070
// ----
console.log("\n");
console.log(carriedAddition("12+34+56+78+90"));
// 22
// ---
//  12
//  34
//  56
//  78
//  90
// ---
// 270
// ---
console.log("\n");
console.log(carriedAddition("999999+1"));
// 111111
// -------
//  999999
//       1
// -------
// 1000000
// -------
