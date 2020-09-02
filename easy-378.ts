const havelHakimi = (input: number[]): boolean => {
	const [n, ...arr] = input.filter(el => el).sort((a, b) => b - a);
	return !n
		? true
		: arr.length < n
		? false
		: havelHakimi(arr.map((el, i) => (i < n ? el - 1 : el)));
};

[
	havelHakimi([5, 3, 0, 2, 6, 2, 0, 7, 2, 5]) === false,
	havelHakimi([4, 2, 0, 1, 5, 0]) === false,
	havelHakimi([3, 1, 2, 3, 1, 0]) === true,
	havelHakimi([16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16]) === true,
	havelHakimi([14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12]) === true,
	havelHakimi([15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3]) === false,
	havelHakimi([6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1]) === false,
	havelHakimi([2, 2, 0]) === false,
	havelHakimi([3, 2, 1]) === false,
	havelHakimi([1, 1]) === true,
	havelHakimi([1]) === false,
	havelHakimi([]) === true,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
