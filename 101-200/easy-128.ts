// This is effectively the same as easy-123, but here's the solution:

const sumDigits = (n: number): number =>
	n < 10 ? n : sumDigits(Math.floor((n % 10) + n / 10));

console.log(sumDigits(12345)); // 6
