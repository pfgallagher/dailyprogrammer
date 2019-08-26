// Naive brute force solution with *extremely performant* n^3 complexity...
// Tried to do some magic with fibonaci numbers, but I'll leave that for
// another time.

const pythagoreanTriples = (n: number): number[][] => {
	const triples: Set<string> = new Set();
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				if (i ** 2 + j ** 2 === k ** 2 && i + j + k === n && i < j && j < k) {
					triples.add([i, j, k].sort((a, b) => a - b).toString());
				}
			}
		}
	}
	return [...triples].map(arr => arr.split(",").map(num => parseInt(num, 10)));
};

console.log(pythagoreanTriples(240));
