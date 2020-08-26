const qcheck = (rows: number[]): boolean => {
	for (const col of rows) {
		for (let i = col + 1, j = 1; i < rows.length; i++, j++) {
			const next = rows[col];
			if ([next, next + j, next - j].some(cell => cell === rows[i])) {
				return false;
			}
		}
	}
	return true;
};

[
	qcheck([4, 2, 7, 3, 6, 8, 5, 1]) === true,
	qcheck([2, 5, 7, 4, 1, 8, 6, 3]) === true,
	qcheck([5, 3, 1, 4, 2, 8, 6, 3]) === false,
	qcheck([5, 8, 2, 4, 7, 1, 3, 6]) === false,
	qcheck([4, 3, 1, 8, 1, 3, 5, 2]) === false,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
