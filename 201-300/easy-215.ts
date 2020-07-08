const arrFrequency = (arr: number[]) => {
	const result: { [num: number]: number } = {};
	for (const el of arr) {
		if (result[el]) {
			result[el]++;
		} else {
			result[el] = 1;
		}
	}
	return result;
};

const containsTriplicates = (arr: number[]): boolean =>
	Object.entries(arrFrequency(arr)).some(([num, count]) => count >= 3);

const sadCycles = (base: number, start: number): number[] => {
	const arr: number[] = [];
	let num = start;
	// This is probably pretty naïve cycle detection, but it gets the job done.
	while (!containsTriplicates(arr)) {
		num = [...num.toString()]
			.map(el => Math.pow(parseInt(el, 10), base))
			.reduce((acc, cur) => acc + cur, 0);
		arr.push(num);
	}
	return [
		...new Set(arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el))),
	];
};

console.log(sadCycles(5, 117649));
// 10933, 59536, 73318, 50062
console.log(sadCycles(6, 2));
// 383890, 1057187, 513069, 594452, 570947, 786460, 477201, 239459, 1083396, 841700
console.log(sadCycles(7, 7));
// 5345158, 2350099, 9646378, 8282107, 5018104, 2191663
console.log(sadCycles(3, 14));
// 371
console.log(sadCycles(11, 2));
// 5410213163, 416175830, 10983257969, 105122244539, 31487287760, 23479019969, 127868735735, 23572659062, 34181820005, 17233070810, 12544944422, 31450865399, 71817055715, 14668399199, 134844138593, 48622871273, 21501697322, 33770194826, 44292995390, 125581636412, 9417560504, 33827228267, 21497682212, 42315320498, 40028569325, 40435823054, 8700530096, 42360123272, 2344680590, 40391187185, 50591455115, 31629394541, 63182489351, 48977104622, 44296837448, 50918009003, 71401059083, 42001520522, 101858747, 21187545101, 10669113941, 63492084785, 50958448520, 48715803824, 27804526448, 19581408116, 48976748282, 61476706631
