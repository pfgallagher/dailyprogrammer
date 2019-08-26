const maxSumSeries = (arr: number[]): number => {
	let max = 0;
	let intermediateMax = 0;
	for (const el of arr) {
		intermediateMax += el;
		if (intermediateMax < 0) {
			intermediateMax = 0;
		}
		if (max < intermediateMax) {
			max = intermediateMax;
		}
	}
	return max;
};

console.log(maxSumSeries([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
