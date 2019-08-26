const slidingWindow = (arr: number[], size: number, option: string) => {
	const arrs = [];
	while (arr.length) {
		const possibleWindow = arr.slice(0, size);
		if (possibleWindow.length === size) {
			arrs.push(possibleWindow);
		}
		arr.splice(0, 1);
	}
	let result;
	if (option === "min") {
		result = arrs.map(el => Math.min(...el));
	} else if (option === "max") {
		result = arrs.map(el => Math.max(...el));
	}
	return result;
};

console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3, "max"));
console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3, "min"));
console.log(slidingWindow([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4, "max"));
console.log(slidingWindow([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4, "min"));
