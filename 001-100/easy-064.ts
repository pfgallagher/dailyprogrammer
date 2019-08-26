export {};
const range = (min: number, max: number): number[] =>
	Array(max - min + 1)
		.fill(0)
		.map((_, idx) => idx + min);
const gcd = (a: number, b: number): number => (b > 0 ? gcd(b, a % b) : a);
const sum = (arr: number[]): number => arr.reduce((acc, cur) => acc + cur);
const count = (arr: number[]): number => arr.length;

const divisors = (n: number): number[] => range(1, n).filter(el => !(n % el));
const sumDivisors = (n: number): number => sum(divisors(n));
const countDivisors = (n: number): number => count(divisors(n));

const totatives = (n: number): number[] =>
	range(1, n).filter(el => gcd(n, el) === 1);
const sumTotatives = (n: number): number => sum(totatives(n));
const totient = (n: number): number => count(totatives(n));

console.log(divisors(60));
console.log(sumDivisors(60));
console.log(countDivisors(60));
console.log("\n");
console.log(totatives(30));
console.log(sumTotatives(30));
console.log(totient(30));
