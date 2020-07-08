import { primeFactorialize } from "../lib/util";

const uniquePrimeFactors = (n: number): number[] => [
	...new Set(primeFactorialize(n)),
];

const sum = (numArr: number[]): number => numArr.reduce((a, c) => a + c);

const sumOfUniquePrimeFactors = (n: number): number =>
	sum(uniquePrimeFactors(n));

const ruthAaronPair = (input: [number, number]): string =>
	`${JSON.stringify(input)} ${
		sumOfUniquePrimeFactors(input[0]) === sumOfUniquePrimeFactors(input[1])
			? "VALID"
			: "INVALID"
	}`;

console.log(ruthAaronPair([714, 715]));
// [714,715] VALID
console.log(ruthAaronPair([77, 78]));
// [77,78] VALID
console.log(ruthAaronPair([20, 21]));
// [20,21] INVALID
console.log(ruthAaronPair([5, 6]));
// [5,6] VALID
console.log(ruthAaronPair([2107, 2108]));
// [2107,2108] VALID
console.log(ruthAaronPair([492, 493]));
// [492,493] VALID
console.log(ruthAaronPair([128, 129]));
// [128,129] INVALID
