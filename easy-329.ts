import { range } from "./lib/util";

class LuckyNumbers {
	private luckyNumbers: number[];

	constructor(size: number) {
		this.luckyNumbers = this.generateLuckyNumbers(range(1, size));
	}

	public nearestLuckyNumbers = (n: number): string => {
		if (this.luckyNumbers.includes(n)) {
			return `${n} is a lucky number.`;
		}
		const luckyNumI = this.luckyNumbers.findIndex(
			luckyNumber => luckyNumber > n,
		);
		return `${this.luckyNumbers[luckyNumI - 1]} < ${n} < ${
			this.luckyNumbers[luckyNumI]
		}`;
	};

	public static test = () => {
		LuckyNumbers.runTests();
	};

	private generateLuckyNumbers = (arr: number[]): number[] | any => {
		let counter = 0;
		while (counter < arr.length) {
			const i = arr[counter];
			if (i === 1) {
				arr = arr.filter((_, j) => !(j % 2));
			} else {
				arr = arr.filter((el, j) => el <= i || (j + 1) % i);
			}
			counter++;
		}
		return arr;
	};

	private static runTests = () => {
		const luckyNumbersTest = new LuckyNumbers(10_000);
		[
			luckyNumbersTest.nearestLuckyNumbers(103) === "99 < 103 < 105",
			luckyNumbersTest.nearestLuckyNumbers(225) === "223 < 225 < 231",
			luckyNumbersTest.nearestLuckyNumbers(997) === "997 is a lucky number.",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

LuckyNumbers.test();
