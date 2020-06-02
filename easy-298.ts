import { basicDeepReverse as deepReverse, posIdxFromNegIdx } from "./lib/util";

class Parenthesis {
	public static clean = (input: string): string =>
		Parenthesis.removeEmpties(
			[...input]
				.filter((_, i) => !Parenthesis.extraParens(input).includes(i))
				.join(""),
		);

	public static test = () => {
		Parenthesis.runTests();
	};

	private static removeEmpties = (input: string): string =>
		input.replace(/\(\)/g, "") || "NULL";

	private static extraParens = (input: string): number[] =>
		Parenthesis.pairs(input)
			.filter((pair, i, arr) => Parenthesis.notNeeded(arr, pair))
			.flat();

	private static pairs = (input: string): number[][] => {
		const pairs: number[][] = [];
		[...input].forEach((char, i) => {
			if (char === "(") {
				pairs.push([i, -1]);
			}
			if (char === ")") {
				pairs[Parenthesis.lastIncompletePair(pairs)][1] = i;
			}
		});
		return pairs;
	};

	private static lastIncompletePair = (arr: number[][]): number =>
		posIdxFromNegIdx(arr, Parenthesis.negIdxOfLastUnpairedParen(arr));

	private static negIdxOfLastUnpairedParen = (arr: number[][]): number =>
		deepReverse(arr).findIndex(([_, close]) => close === -1);

	private static notNeeded = (
		arr: number[][],
		[targetStart, targetEnd]: number[],
	): boolean =>
		!!arr.find(
			([start, end]) => start === targetStart + 1 && end === targetEnd - 1,
		);

	private static runTests = () => {
		[
			Parenthesis.clean("(((3)))") === "(3)",
			Parenthesis.clean("((a((bc)(de)))f)") === "((a((bc)(de)))f)",
			Parenthesis.clean("(((zbcd)(((e)fg))))") === "((zbcd)((e)fg))",
			Parenthesis.clean("ab((c))") === "ab(c)",
			Parenthesis.clean("()") === "NULL",
			Parenthesis.clean("((fgh()()()))") === "(fgh)",
			Parenthesis.clean("()(abc())") === "(abc)",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

Parenthesis.test();
