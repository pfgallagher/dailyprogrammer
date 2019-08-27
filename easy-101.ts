export {};

const range = (min: number, max: number) =>
	Array(max - min + 1)
		.fill(0)
		.map((el, idx) => idx + min);

const nonRepeatingYears = (yearOne: number, yearTwo: number): number[] =>
	range(yearOne, yearTwo).filter(year =>
		[...year.toString()].every(
			(char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char),
		),
	);

console.log(nonRepeatingYears(1980, 1987));
