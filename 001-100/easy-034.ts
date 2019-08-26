const sumTwoLargestNums = (...nums: number[]): number => {
	const [largest, nextLargest] = nums.sort((a, b) => b - a);
	return largest ** 2 + nextLargest ** 2;
};

console.log(sumTwoLargestNums(3, 2, 1)); // -> 9 + 4 -> 13
console.log(sumTwoLargestNums(1, 2, 3)); // -> 9 + 4 -> 13
console.log(sumTwoLargestNums(5, 5, 5)); // -> 25 + 25 -> 50
console.log(sumTwoLargestNums(-3, -2, -1)); // -> 4 + 1 -> 5
console.log(sumTwoLargestNums(-4, 2, 3)); // -> 9 + 4 -> 13

// Works with more than 3 parameters, as well:
console.log(sumTwoLargestNums(5, 3, 4, 2, 1)); // -> 25 + 16 -> 41
