const findDup = arr => {
	const hash = {
		found: "",
	};
	arr.forEach(el => {
		if (hash[el]) hash.found = el;
		hash[el] = true;
	});
	return hash.found ? hash.found : "No Duplicates Found.";
};

console.log(findDup([1, 2, 3]));
console.log(findDup([1, 2, 3, 3, 4]));

const range = (min, max) =>
	Array(max - min + 1)
		.fill()
		.map((el, idx) => idx + min);

const bigArr = range(0, 1000000);
const randomIdx = Math.ceil(Math.random() * bigArr.length);
bigArr.splice(randomIdx, 0, randomIdx);
console.log(findDup(bigArr));
