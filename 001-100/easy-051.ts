const combinations = <T>(options: T[], length: number): T[][] => {
	if (length === 1) {
		return options.map(option => [option]);
	}
	const combos: T[][] = [];
	options.forEach((option, i) => {
		const subCombos = combinations(options.slice(i + 1), length - 1);
		subCombos.forEach((subCombo: T[]) => {
			combos.push([option].concat(subCombo));
		});
	});
	return combos;
};

console.log(combinations([1, 2, 3, 4, 5], 3));
// Output:
// [1,2,3]
// [1,2,4]
// [1,2,5]
// [1,3,4]
// [1,3,5]
// [1,4,5]
// [2,3,4]
// [2,3,5]
// [2,4,5]
// [3,4,5]
