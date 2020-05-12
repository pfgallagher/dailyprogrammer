export {};

const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

const fibArrUpToN = (n: number): number[] => {
	const fibArr: number[] = [];
	let i = 1;
	while (!fibArr.length || fibArr[fibArr.length - 1] < n) {
		fibArr.push(fib(i));
		i++;
	}
	return fibArr.filter(num => num <= n);
};

const decimalToFib = (n: number): string => {
	const fibCount = fibArrUpToN(n)
		.reverse()
		.map(el => [el, 0]);
	while (n > 0) {
		const largestI = fibCount.findIndex(([val]) => val <= n);
		n -= fibCount[largestI][0];
		fibCount[largestI][1]++;
	}
	return fibCount.map(([_, count]) => count.toString()).join("");
};

const fibToDecimal = (n: string): string => {
	let fibArr: number[] = [];
	let counter = 1;
	while (fibArr.length < n.length) {
		fibArr = fibArrUpToN(counter);
		counter++;
	}
	return fibArr
		.slice(0, n.length)
		.reverse()
		.reduce((a, c, i) => (n[i] === "1" ? a + c : a))
		.toString();
};

const convert = (type: "F" | "D", n: string): string =>
	type === "F" ? fibToDecimal(n) : decimalToFib(parseInt(n, 10));

[
	convert("D", "16") === "1001000",
	convert("D", "32") === "10101000",
	convert("D", "9024720") === "1010100101010100000010001000010010",
	convert("F", "10") === "1",
	convert("F", "1") === "1",
	convert("F", "111111") === "20",
	convert("F", "100000") === "8",
	convert("F", "10110110100111001") === "2868",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
