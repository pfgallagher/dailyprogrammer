const isUpper = (char: string): boolean => /[A-Z]/.test(char);

const tally = (input: string): string => {
	const scores = Object.fromEntries(
		[...new Set(input.toLowerCase())]
			.sort((a, b) => (a < b ? -1 : 1))
			.map(player => [player, 0]),
	);
	[...input].forEach(pt => {
		if (isUpper(pt)) {
			scores[pt.toLowerCase()]--;
		} else {
			scores[pt]++;
		}
	});
	return Object.entries(scores)
		.map(entry => entry.join(":"))
		.join(", ");
};

[
	tally("abcde") === "a:1, b:1, c:1, d:1, e:1",
	tally("dbbaCEDbdAacCEAadcB") === "a:1, b:2, c:0, d:2, e:-2",
	tally("EbAAdbBEaBaaBBdAccbeebaec") === "a:1, b:0, c:3, d:2, e:1",
].forEach((test, i) => {
	console.assert(test, i.toString());
});
