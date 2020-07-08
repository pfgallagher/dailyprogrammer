import { range } from "../lib/util";

const factorial = (n: number): number =>
	n > 0 ? range(1, n).reduce((a, c) => (a *= c)) : 1;

const findFactorial = (n: number): number | undefined => {
	let counter = 1;
	while (factorial(counter) <= n) {
		if (factorial(counter) === n) {
			return counter;
		}
		counter++;
	}
	return;
};

const reverseFactorial = (n: number): string =>
	findFactorial(n) ? `${n} = ${findFactorial(n)}!` : `${n} NONE`;

[
	reverseFactorial(120) === "120 = 5!",
	reverseFactorial(150) === "150 NONE",
	reverseFactorial(3628800) === "3628800 = 10!",
	reverseFactorial(479001600) === "479001600 = 12!",
	reverseFactorial(6) === "6 = 3!",
	reverseFactorial(18) === "18 NONE",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
