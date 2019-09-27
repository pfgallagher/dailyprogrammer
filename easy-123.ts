const digitalRoot = (n: number): number =>
	n < 10 ? n : digitalRoot(Math.floor((n % 10) + n / 10));

console.log(digitalRoot(0)); // 0
console.log(digitalRoot(1)); // 1
console.log(digitalRoot(789)); // 6
console.log(digitalRoot(31337)); // 8
console.log(digitalRoot(1073741824)); // 1
