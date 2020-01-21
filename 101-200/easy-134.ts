const nDivisibleDigits = (n: number, m: number): number | string =>
	10 ** n - 1 - ((10 ** n - 1) % m) || "No solution found";

console.log(nDivisibleDigits(3, 2)); // 998
console.log(nDivisibleDigits(7, 4241275)); // 8482550
console.log(nDivisibleDigits(23193.123, 391293213.2)); // 8482550
