import { range } from "../lib/util";

const sum = (numArr: number[]): number => numArr.reduce((a, c) => a + c, 0);

const divisors = (n: number): number[] => range(1, n).filter(num => !(n % num));

const abundantOrDeficient = (n: number): string => {
	const sumOfDivisors = sum(divisors(n));
	const doubleN = n * 2;
	if (sumOfDivisors < doubleN) {
		return `${n} is deficient`;
	}
	return `${n} is abundant by ${sumOfDivisors - doubleN}`;
};

[9, 18, 21, 69, 85, 111, 112, 134, 220].forEach(n => {
	console.log(abundantOrDeficient(n));
});
// 9 is deficient
// 18 is abundant by 3
// 21 is deficient
// 69 is deficient
// 85 is deficient
// 111 is deficient
// 112 is abundant by 24
// 134 is deficient
// 220 is abundant by 64
