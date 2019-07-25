const countLength = (morse: string): number =>
	[...morse].reduce((acc, cur) => {
		if (cur === ".") {
			acc++;
		} else if (cur === "-") {
			acc += 2;
		}
		return acc;
	}, 0);

const generateCombos = (n: number): string[] => {
	const maxBinaryNum = 2 ** n;
	const combos: Set<string> = new Set();

	for (let i = 0; i <= maxBinaryNum; i++) {
		combos.add([...i.toString(2)].map(el => (el === "0" ? "." : "-")).join(""));
		if (i <= n) {
			[...combos]
				.filter(el => el.length < n)
				.forEach(combo => {
					combos.add(combo.padStart(i, "."));
				});
		}
	}
	return [...combos].filter(el => countLength(el) === n);
};

console.log(generateCombos(5));
console.log(generateCombos(10));
// I couldn't figure out a way to make it performant enough to calculate much
// larger than say, n = 20... I think that it's largely due to JavaScript's
// efficiency (or relative lack thereof), but it's hard to say without trying it
// in another language.
