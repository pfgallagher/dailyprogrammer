const countDigits = (n: number): number => {
	const returnedArr: number[][] = [];
	for (const num of [...n.toString()]) {
		const lastEl = returnedArr[returnedArr.length - 1];
		if (lastEl && lastEl[1] === parseInt(num, 10)) {
			lastEl[0]++;
		} else {
			returnedArr.push([1, parseInt(num, 10)]);
		}
	}
	return parseInt(returnedArr.flat().join(""), 10);
};

const calculateNthLookAndSayNumber = (n: number): number => {
	let lookAndSayNumber = 1;
	for (let i = 1; i < n; i++) {
		lookAndSayNumber = countDigits(lookAndSayNumber);
	}
	return lookAndSayNumber;
};

console.log(calculateNthLookAndSayNumber(1)); // 1
console.log(calculateNthLookAndSayNumber(2)); // 11
console.log(calculateNthLookAndSayNumber(3)); // 21
console.log(calculateNthLookAndSayNumber(4)); // 1211
console.log(calculateNthLookAndSayNumber(5)); // 111221
console.log(calculateNthLookAndSayNumber(6)); // 312211
