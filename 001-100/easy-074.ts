const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const fibArrUpToN = (n: number): number[] => {
	const fibArr = [0];
	let i = 1;
	while (fibArr[fibArr.length - 1] < n) {
		fibArr.push(fib(i));
		i++;
	}
	return fibArr.filter(num => num <= n);
};

const zeckendorf = (n: number, memoArr: number[] = []): number[] => {
	const arr = memoArr;
	const options = fibArrUpToN(n);
	const largest = Math.max(...options);
	const found = options.find(el => n - el === 0);
	if (found) {
		arr.push(found);
		return arr;
	}
	arr.push(largest);
	return zeckendorf(n - largest, arr);
};

console.log(zeckendorf(100)); // [89, 8, 3]
console.log(zeckendorf(3 ** 15)); // [9227465, 3524578, 1346269, 196418, 46368, 6765, 987, 55, 2]
