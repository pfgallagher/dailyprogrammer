const findGarlandDegree = (word: string): number => {
	let degree = 0;
	for (let i = 1; i < word.length; i++) {
		const left = word.slice(0, i);
		const right = word.slice(-i);
		if (left === right && left.length > degree) {
			degree = left.length;
		}
	}
	return degree;
};

console.log(findGarlandDegree("programmer"));
// 0
console.log(findGarlandDegree("ceramic"));
// 1
console.log(findGarlandDegree("onion"));
// 2
console.log(findGarlandDegree("alfalfa"));
// 4
