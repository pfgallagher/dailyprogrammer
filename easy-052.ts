const calculateWordValue = (word: string, length: number): number =>
	[...word.toLowerCase()].reduce(
		(acc, cur) => (acc += cur.charCodeAt(0) - 96),
		0,
	) / length;

const sortByLetterPosition = (arr: string[]): string[] =>
	arr.sort(
		(a, b) => calculateWordValue(a, a.length) - calculateWordValue(b, b.length),
	);

console.log(sortByLetterPosition(["Shoe", "Hat"])); // ["Hat", "Shoe"]
