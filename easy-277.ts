import { gcd } from "./lib/util";

const simplifyFraction = (input: string): string => {
	const [a, b] = input.split(" ").map(n => parseInt(n, 10));
	const greatestCommonDenominator = gcd(a, b);
	return `${a / greatestCommonDenominator} ${b / greatestCommonDenominator}`;
};

console.log(simplifyFraction("4 8"));
// 1 2
console.log(simplifyFraction("1536 78360"));
// 64 3265
console.log(simplifyFraction("51478 5536"));
// 25739 2768
console.log(simplifyFraction("46410 119340"));
// 7 18
console.log(simplifyFraction("7673 4729"));
// 7673 4729
console.log(simplifyFraction("4096 1024"));
// 4 1
