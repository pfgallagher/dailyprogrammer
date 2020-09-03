const tax = (income: number): number =>
	income <= 10_000
		? 0
		: income <= 30_000
		? Math.floor((income - 10_000) * 0.1)
		: income <= 100_000
		? Math.floor(tax(30_000) + (income - 30_000) * 0.25)
		: Math.floor(tax(100_000) + (income - 100_000) * 0.4);

[
	tax(0) === 0,
	tax(10000) === 0,
	tax(10009) === 0,
	tax(10010) === 1,
	tax(12000) === 200,
	tax(56789) === 8697,
	tax(1234567) === 473326,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
