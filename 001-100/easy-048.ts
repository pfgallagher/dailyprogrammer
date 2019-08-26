const paritySort = (arr: number[]): number[] => {
	let min = 0;
	let max = arr.length - 1;
	while (min < max) {
		while (!(arr[min] % 2) && min < max) {
			min++;
		}
		while (arr[max] % 2 && min < max) {
			max--;
		}
		if (min < max) {
			[arr[min], arr[max]] = [arr[max], arr[min]];
		}
	}
	return arr;
};

console.log(paritySort([1, 3, 3, 4, 5, 6, 7, 8, 9, 10, -2, 8])); // [8, -2, 10, 4, 8, 6, 7, 5, 9, 3, 3, 1];
