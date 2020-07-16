const cannibalNumbers = (nums: number[], target: number): number =>
	nums
		.map(n => {
			const countSmallerNums = nums.filter(innerN => innerN < n).length;
			return countSmallerNums ? n + countSmallerNums : 0;
		})
		.filter(n => n >= target).length;

console.log(cannibalNumbers([21, 9, 5, 8, 10, 1, 3], 10));
// 4
console.log(cannibalNumbers([21, 9, 5, 8, 10, 1, 3], 15));
// 2
