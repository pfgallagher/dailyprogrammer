const threeSum = (arr: number[]): [number, number, number][] => {
	const results = new Set<string>();
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				const el1 = arr[i];
				const el2 = arr[j];
				const el3 = arr[k];
				if (el1 && el2 && el3 && el1 + el2 + el3 === 0) {
					results.add([el1, el2, el3].sort().join(","));
				}
			}
		}
	}
	return [...results].map(
		sum => sum.split(",").map(n => parseInt(n, 10)) as [number, number, number],
	);
};

console.log(
	threeSum([
		9,
		-6,
		-5,
		9,
		8,
		3,
		-4,
		8,
		1,
		7,
		-4,
		9,
		-9,
		1,
		9,
		-9,
		9,
		4,
		-6,
		-8,
	]),
);
// [
//   [ -4, -5, 9 ],
//   [ -5, 1, 4 ],
//   [ -4, -4, 8 ],
//   [ -9, 1, 8 ],
//   [ -4, 1, 3 ],
//   [ -8, 1, 7 ]
// ]
console.log(threeSum([4, 5, -1, -2, -7, 2, -5, -3, -7, -3, 1]));
// [
//   [ -1, -3, 4 ],
//   [ -5, 1, 4 ],
//   [ -2, -3, 5 ],
//   [ -7, 2, 5 ],
//   [ -3, 1, 2 ]
// ]
console.log(threeSum([-1, -6, -3, -7, 5, -8, 2, -8, 1]));
// [ [ -6, 1, 5 ], [ -3, 1, 2 ], [ -7, 2, 5 ] ]
console.log(threeSum([-5, -1, -4, 2, 9, -9, -6, -1, -7]));
// [ [ -4, -5, 9 ], [ -1, -1, 2 ] ]
