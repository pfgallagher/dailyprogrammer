const possibleCombos = (necklace: string): string[] => {
	const combos: string[] = [];
	const necklaceArr = [...necklace];
	do {
		necklaceArr.push(necklaceArr.shift() as string);
		combos.push(necklaceArr.join(""));
	} while (necklaceArr.join("") !== necklace);
	return combos;
};

const sameNecklace = (necklaceA: string, necklaceB: string): boolean =>
	possibleCombos(necklaceA).includes(necklaceB);

[
	sameNecklace("nicole", "icolen") === true,
	sameNecklace("nicole", "lenico") === true,
	sameNecklace("nicole", "coneli") === false,
	sameNecklace("aabaaaaabaab", "aabaabaabaaa") === true,
	sameNecklace("abc", "cba") === false,
	sameNecklace("xxyyy", "xxxyy") === false,
	sameNecklace("xyxxz", "xxyxz") === false,
	sameNecklace("x", "x") === true,
	sameNecklace("x", "xx") === false,
	sameNecklace("x", "") === false,
	sameNecklace("", "") === true,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
