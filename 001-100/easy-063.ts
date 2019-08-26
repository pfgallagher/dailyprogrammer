const reverse = <T>(n: number, arr: T[]): T[] => {
	for (let min = 0, max = n - 1; min < max; min++, max--) {
		[arr[min], arr[max]] = [arr[max], arr[min]];
	}
	return arr;
};

console.log(reverse(1, [1, 2, 3, 4, 5]));
console.log(reverse(2, [1, 2, 3, 4, 5]));
console.log(reverse(5, [1, 2, 3, 4, 5]));
console.log(reverse(3, [51, 41, 12, 62, 74]));
