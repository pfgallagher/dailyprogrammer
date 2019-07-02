// 357 -> 434 -> 217 -> 236 -> 118 -> 59 -> 61 -> 62 -> 31
// 101100101 -> 110110010 -> 11011001 -> 11101100 -> 1110110 -> 111011 -> 111101 -> 111110 -> 11111
// Write a program that given a number will print out the binary rotation sequence for that number (you only need to print out the sequence in decimal).

// What is the binary rotation sequence for 54321?

const binaryRotation = (num: number): string => {
	const resultArr: number[] = [num];
	let nextNum = num;
	let lastNum = 0;
	while (nextNum !== lastNum) {
		lastNum = nextNum;
		const binaryNumber = nextNum.toString(2);
		const binaryArr = [...binaryNumber];
		const popped = binaryArr.pop();
		if (popped) {
			binaryArr.unshift(popped);
		}
		nextNum = parseInt(binaryArr.join(""), 2);
		if (nextNum !== resultArr[resultArr.length - 1]) {
			resultArr.push(nextNum);
		}
	}
	return resultArr.join(" -> ");
};

console.log(binaryRotation(19)); // 19 -> 25 -> 28 -> 14 -> 7
console.log(binaryRotation(69)); // 69 -> 98 -> 49 -> 56 -> 28 -> 14 -> 7
console.log(binaryRotation(205)); // 205 -> 230 -> 115 -> 121 -> 124 -> 62 -> 31
console.log(binaryRotation(357)); // 357 -> 434 -> 217 -> 236 -> 118 -> 59 -> 61 -> 62 -> 31
console.log(binaryRotation(54321)); //  54321 -> 59928 -> 29964 -> 14982 -> 7491 -> 7841 -> 8016 -> 4008 -> 2004 -> 1002 -> 501 -> 506 -> 253 -> 254 -> 127
