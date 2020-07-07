import { isPrime } from "./lib/util";

const nearestPrimeOfN = (n: number, direction: "below" | "above"): number => {
	let curNum = n;
	while (true) {
		if (isPrime(curNum)) {
			return curNum;
		}
		if (direction === "below") {
			curNum--;
		} else if (direction === "above") {
			curNum++;
		}
	}
};

const nearestPrimes = (n: number): string =>
	isPrime(n)
		? `${n} is prime.`
		: `${nearestPrimeOfN(n, "below")} < ${n} < ${nearestPrimeOfN(n, "above")}`;

console.log(nearestPrimes(270));
// 269 < 270 < 271
console.log(nearestPrimes(541));
// 541 is prime.
console.log(nearestPrimes(993));
// 991 < 993 < 997
console.log(nearestPrimes(649));
// 647 < 649 < 653
console.log(nearestPrimes(2010741));
// 2010733 < 2010741 < 2010881

// Skipping 1425172824437700148, since it exceeds Number.MAX_SAFE_INTEGER
