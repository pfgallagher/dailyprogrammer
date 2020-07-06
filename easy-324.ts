import { trunc } from "./lib/util";

// Using the Babylonian
const sqrt = (n: number, precision = 0, guess = n / 2): number => {
	const avg = (n / guess + guess) / 2;
	return guess === avg ? trunc(guess, precision) : sqrt(n, precision, avg);
};

console.log(sqrt(7720.17));
// 87
console.log(sqrt(7720.17, 1));
// 87.8
console.log(sqrt(7720.17, 2));
// 87.86
console.log(sqrt(12345));
// 111
console.log(sqrt(123456, 8));
// 351.36306009
console.log(sqrt(12345678901234567890123456789, 1));
// 111111110611111.1
