import { range } from "../lib/util";

class Kaprekar {
	private static maxNLength = 4;

	public static kaprekar = (n: number): number => {
		let counter = 0;
		let result = n;
		while (result !== 6174) {
			result =
				Kaprekar.descendingDigits(result) - Kaprekar.ascendingDigits(result);
			counter++;
		}
		return counter;
	};

	public static largestKaprekar = () =>
		Math.max(
			...range(0, 9999).map(n =>
				Kaprekar.containsDifferentDigits(n) ? Kaprekar.kaprekar(n) : 0,
			),
		);

	public static test = () => Kaprekar.runTests();

	private static nToDigArr = (n: number): number[] =>
		[...n.toString().padStart(Kaprekar.maxNLength, "0")].map(dig =>
			parseInt(dig, 10),
		);

	/*
	Presumably, largestDigit was supposed to be used for sorting the digits in
	ascending / descending order. I opted for a simpler, more functional approach,
	since using largestDigit would likely be a mostly procedural process involving
	unintuitive in-place mutation.
	*/
	private static largestDigit = (n: number): number =>
		Math.max(...Kaprekar.nToDigArr(n));

	private static descendingDigits = (n: number): number =>
		parseInt(
			Kaprekar.nToDigArr(n)
				.sort((a, b) => b - a)
				.join(""),
			10,
		);

	private static ascendingDigits = (n: number): number =>
		parseInt(
			[...Kaprekar.descendingDigits(n).toString()].reverse().join(""),
			10,
		);

	private static containsDifferentDigits = (n: number): boolean =>
		new Set([...n.toString()]).size > 1;

	private static runTests = () => {
		[
			Kaprekar.largestDigit(1234) === 4,
			Kaprekar.largestDigit(3253) === 5,
			Kaprekar.largestDigit(9800) === 9,
			Kaprekar.largestDigit(3333) === 3,
			Kaprekar.largestDigit(120) === 2,
			Kaprekar.descendingDigits(1234) === 4321,
			Kaprekar.descendingDigits(3253) === 5332,
			Kaprekar.descendingDigits(9800) === 9800,
			Kaprekar.descendingDigits(3333) === 3333,
			Kaprekar.descendingDigits(120) === 2100,
			Kaprekar.kaprekar(6589) === 2,
			Kaprekar.kaprekar(5455) === 5,
			Kaprekar.kaprekar(6174) === 0,
			Kaprekar.largestKaprekar() === 7,
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

Kaprekar.test();
