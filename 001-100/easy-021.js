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

const nextNum = num => {
	const permutations = strPermutations(`${num}`)
		.map(el => parseInt(el, 10))
		.sort((a, b) => a - b);
	const nextSmallest = permutations.find(el => el > num) || "Not possible";
	return nextSmallest;
};

console.log(nextNum(1)); // -> Not possible
console.log(nextNum(12)); // -> 21
console.log(nextNum(123)); // -> 132
console.log(nextNum(132)); // -> 213
console.log(nextNum(213)); // -> 231
console.log(nextNum(231)); // -> 312
console.log(nextNum(312)); // -> 321
console.log(nextNum(321)); // -> Not Possible
