import { combinations, strPermutations } from "../lib/util";

const countDigits = (n: number): number => [...n.toString()].length;

const firstNumberWithNDigits = (n: number): number => 10 ** (n - 1);

const lastNumberWithNDigits = (n: number): number =>
	firstNumberWithNDigits(n + 1) - 1;

const digitPermutations = (n: number, len: number): number[] => [
	...new Set<number>(
		combinations(
			[...n.toString()].map(num => parseInt(num, 10)),
			len,
		)
			.flatMap(combo => strPermutations(combo.join("")))
			.map(permutation => parseInt(permutation, 10))
			.filter(permutation => countDigits(permutation) === len)
			.sort(),
	),
];

const multiply = (numArr: number[]): number =>
	numArr.reduce((a, c) => a * c, 1);

const countTrailingZeros = (numArr: number[]): number =>
	numArr.reduce((a, c) => (!(c % 10) ? a + 1 : a), 0);

const createCachedCombinationsForMultiplication = (): ((
	digPermutations: number[],
	m: number,
) => number[][]) => {
	const cache: { [key: string]: number[][] } = {};
	return (digPermutations: number[], m: number): number[][] => {
		const key = digPermutations.toString();
		const cachedValue = cache[key];
		if (cachedValue) {
			return cachedValue;
		}
		const combinationsForMultiplication = combinations(
			digPermutations,
			m,
		).filter(combination => countTrailingZeros(combination) <= 1);
		cache[key] = combinationsForMultiplication;
		return combinationsForMultiplication;
	};
};

const cachedCombinationsForMultiplication = createCachedCombinationsForMultiplication();

const vampireTest = (
	n: number,
	m: number,
	digPermutations: number[],
): string | false => {
	const combinationsForMultiplication = cachedCombinationsForMultiplication(
		digPermutations,
		m,
	);
	for (const multiplicationCombination of combinationsForMultiplication) {
		if (
			multiply(multiplicationCombination) === n &&
			usesAllDigits(n, parseInt(multiplicationCombination.join(""), 10))
		) {
			return `${n}=${multiplicationCombination.join("*")}`;
		}
	}
	return false;
};

const tallyDigits = (n: number): number[] => {
	const tally = Array(10).fill(0);
	[...n.toString()].forEach(dig => {
		const digNum = parseInt(dig, 10);
		tally[digNum]++;
	});
	return tally;
};

const usesAllDigits = (n: number, target: number): boolean =>
	tallyDigits(n).every((dig, i) => dig === tallyDigits(target)[i]);

const vampireNumbers = (n: number, m: number): string => {
	const vampireNums = [];
	for (let i = firstNumberWithNDigits(n); i <= lastNumberWithNDigits(n); i++) {
		const digPermutations = digitPermutations(i, 2);
		const vampireTestResult = vampireTest(i, m, digPermutations);
		if (vampireTestResult) {
			vampireNums.push(vampireTestResult);
		}
	}
	return vampireNums.join("\n");
};

console.log(vampireNumbers(4, 2));
// 1260=21*60
// 1395=15*93
// 1435=41*35
// 1530=51*30
// 1827=87*21
// 2187=27*81
// 6880=86*80

/*
	While this does execute correctly, it is commented out because it is 
	definitely far from performant!
*/

// console.log(vampireNumbers(6, 3));
// 114390=41*31*90
// 121695=21*61*95
// 127428=21*74*82
// 127680=21*76*80
// 127980=20*79*81
// 137640=31*74*60
// 163680=66*31*80
// 178920=71*90*28
// 197925=91*75*29
// 198450=81*49*50
// 247680=40*72*86
// 294768=46*72*89
// 376680=73*60*86
// 397575=93*75*57
// 457968=56*94*87
// 479964=74*94*69
// 498960=99*84*60
