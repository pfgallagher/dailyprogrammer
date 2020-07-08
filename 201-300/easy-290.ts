import { range } from "../lib/util";

class Kaprekar {
	public static isKaprekar = (n: number): boolean =>
		n === 1 || // By convention, 1 is a Kaprekar number
		Kaprekar.someSumEqualsN(n, Kaprekar.sumSplits(Kaprekar.sqrStr(n)));

	public static kaprekarNumsInRange = (start: number, end: number): string =>
		range(start, end)
			.filter(n => Kaprekar.isKaprekar(n))
			.join(" ");

	public static test = () => {
		Kaprekar.runTests();
	};

	private static someSumEqualsN = (n: number, splitSumArr: number[]): boolean =>
		splitSumArr.some(sum => sum === n);

	private static sqrStr = (n: number): string => (n ** 2).toString();

	private static sumSplits = (n: string): number[] =>
		range(1, n.length)
			.map(i =>
				[n.slice(0, i), n.slice(i)].map(portion => parseInt(portion, 10)),
			)
			.filter(nArr => nArr.every(portion => portion))
			.map(pair => pair.reduce((a, c) => a + c));

	private static runTests = () => {
		// Tests modified to match OEIS A006886
		[
			Kaprekar.kaprekarNumsInRange(1, 50) === "1 9 45",
			Kaprekar.kaprekarNumsInRange(2, 100) === "9 45 55 99",
			Kaprekar.kaprekarNumsInRange(101, 9000) ===
				"297 703 999 2223 2728 4879 4950 5050 5292 7272 7777",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

Kaprekar.test();
