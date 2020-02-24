import { gcd, lcmOfArray } from "./lib/util";

const addFractions = (input: string): string => {
	const fractions = input
		.split("\n")
		.map(fraction => fraction.split("/").map(part => parseInt(part, 10)));
	const denominators = fractions.map(([numerator, denominator]) => denominator);
	const LCM = lcmOfArray(denominators);
	const multipliers = denominators.map(denominator => LCM / denominator);
	const numerators = fractions.map(([numerator]) => numerator);
	const summation = numerators
		.map((numerator, i) => numerator * multipliers[i])
		.reduce((acc, cur) => acc + cur, 0);
	const GCD = gcd(summation, LCM);
	return `${summation / GCD}/${LCM / GCD}`;
};

console.log(addFractions("1/6\n3/10"));
// 7/15
console.log(addFractions("1/3\n1/4\n1/12"));
// 2/3
console.log(addFractions("2/9\n4/35\n7/34\n1/2\n16/33"));
// 89962/58905
console.log(
	addFractions(
		"1/7\n35/192\n61/124\n90/31\n5/168\n31/51\n69/179\n32/5\n15/188\n10/17",
	),
);
// 351910816163/29794134720
