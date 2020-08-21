const subfactorial = (n: number): number =>
	!n ? 1 : n === 1 ? 0 : (n - 1) * (subfactorial(n - 1) + subfactorial(n - 2));

[
	subfactorial(0) === 1,
	subfactorial(1) === 0,
	subfactorial(2) === 1,
	subfactorial(3) === 2,
	subfactorial(4) === 9,
	subfactorial(5) === 44,
	subfactorial(6) === 265,
	subfactorial(9) === 133496,
	subfactorial(14) === 32071101049,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
