export {};

const range = (min: number, max: number): number[] =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);

const isPrime = (num: number): boolean => {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (!(num % i)) {
			return false;
		}
	}
	return true;
};

const emirpsUpToN = (n: number): number[] =>
	range(0, n).filter(num => {
		const reverse = [...num.toString(10)].reverse().join("");
		const reversedNum = parseInt(reverse, 10);

		return isPrime(num) && isPrime(reversedNum) && num.toString(10) !== reverse;
	});

console.log(emirpsUpToN(158));
