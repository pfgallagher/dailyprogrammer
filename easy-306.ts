export {};
import { frequency } from "./lib/util";

const numerals: [number, string][] = [
	[1000, "M"],
	[900, "CM"],
	[500, "D"],
	[400, "CD"],
	[100, "C"],
	[90, "XC"],
	[50, "L"],
	[40, "XL"],
	[10, "X"],
	[9, "IX"],
	[5, "V"],
	[4, "IV"],
	[1, "I"],
];

const toRoman = (n: number): string => {
	let result = "";
	while (n) {
		const largestNumeral = numerals.find(([numeralVal]) => numeralVal <= n);
		if (largestNumeral) {
			const [val, char] = largestNumeral;
			result += char;
			n -= val;
		}
	}
	return result;
};

const isPandigital = (freqObj: { [char: string]: number }): boolean =>
	["I", "V", "X", "L", "C", "D", "M"].every(
		char => freqObj.hasOwnProperty(char) && freqObj[char] === 1,
	);

const pandigitalRomanNumeralsUpToN = (n: number): number[] => {
	const pandigitalNumerals: number[] = [];
	for (let i = 1; i <= n; i++) {
		const freq = frequency([...toRoman(i)]);
		if (isPandigital(freq)) {
			pandigitalNumerals.push(i);
		}
	}
	return pandigitalNumerals;
};

console.log(pandigitalRomanNumeralsUpToN(2000));
// [1444, 1446, 1464, 1466, 1644, 1646, 1664, 1666]
