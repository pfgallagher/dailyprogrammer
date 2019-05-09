const union = (arrOne, arrTwo) => [...new Set([...arrOne, ...arrTwo])];

console.log(union(["a", "b", "c", 1, 4], ["a", "x", 34, "4"]));

// While I'm at it, I'll write an intersection function as well:

const intersect = (arrOne, arrTwo) =>
	arrOne.length <= arrTwo.length
		? arrOne.filter(el => arrTwo.includes(el))
		: arrTwo.filter(el => arrOne.includes(el));

console.log(intersect(["a", "b", "c", 1, 4], ["a", "b", "x", 34, "4"]));

// ... I guess I'll write a difference function, too. lol

const difference = (arrOne, arrTwo) =>
	arrTwo.filter(el => !arrOne.includes(el));

console.log(difference(["a", "b", "c", 1, 4], ["a", "b", "x", 34, "4"]));
