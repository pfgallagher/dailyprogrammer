import { primeFactorialize } from "./lib/util";

const integerComplexity = (input: number): number => {
	const primeFactors = primeFactorialize(input);
	const largest = primeFactors.pop() || 0;
	const product = primeFactors.reduce((a, c) => a * c, 1);
	return product + largest;
};

[
	integerComplexity(12345) === 838,
	integerComplexity(12) === 7,
	integerComplexity(456) === 43,
	integerComplexity(4567) === 4568,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
