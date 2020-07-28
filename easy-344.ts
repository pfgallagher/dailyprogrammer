import { range, isOdd } from "./lib/util";

const baumSweetNum = (n: number): 0 | 1 =>
	[...n.toString(2).matchAll(/0+/g)]
		.map(([match]) => isOdd(match.length))
		.some(length => length)
		? 0
		: 1;

const baumSweetSequence = (max: number): (0 | 1)[] => [
	1,
	...range(1, max).map(n => baumSweetNum(n)),
];

[
	baumSweetNum(4) === 1,
	baumSweetNum(5) === 0,
	baumSweetNum(19611206) === 0,
	baumSweetSequence(20).join(", ") ===
		"1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
