const strPermutations = str => {
	if (str.length === 1) return [str];
	if (str.length === 2) return [str, `${str[1]}${str[0]}`];
	const set = new Set();
	[...str].forEach((el, i) => {
		const newStr = [...str.slice()];
		const splicedStr = newStr.splice(i, 1);
		strPermutations(newStr).forEach(el => {
			set.add(splicedStr.concat(el).join(""));
		});
	});
	return [...set];
};
