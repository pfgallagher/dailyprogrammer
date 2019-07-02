const isOdd = (num: number): boolean => !!(num % 2);

const isPrime = (num: number): boolean => {
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (!(num % i)) {
			return false;
		}
	}
	return true;
};

const primeFactorialize = (num: number): number[] => {
	const factors: number[] = [];
	for (let i = 2; i <= num; i++) {
		while (isPrime(i) && !(num % i)) {
			factors.push(i);
			num /= i;
		}
	}
	return factors;
};

const findPoliteness = (num: number): number => {
	const factors = primeFactorialize(num);
	return (
		[...new Set(factors)].reduce(
			(acc, cur) =>
				(acc *=
					factors.filter(factor => factor === cur && isOdd(factor)).length + 1),
			1,
		) - 1
	);
};

console.log(findPoliteness(15)); // 3
console.log(findPoliteness(9)); // 2
console.log(findPoliteness(90)); // 5
