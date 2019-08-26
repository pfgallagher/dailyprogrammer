// This mostly means: capitalizing only every first letter of every word in the string. However, there are some non-obvious exceptions to title case which can't easily be hard-coded. Your function must accept, as a second argument, a set or list of words that should not be capitalized. Furthermore, the first word of every title should always have a capital leter. For example:

const capitalize = (word: string): string =>
	`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;

const titleCase = (title: string, exceptions: string[]): string => {
	return title
		.toLowerCase()
		.split(" ")
		.map((word, i) =>
			!i || !exceptions.includes(word) ? capitalize(word) : word,
		)
		.join(" ");
};

console.log(
	titleCase("the quick brown fox jumps over the lazy dog", [
		"jumps",
		"the",
		"over",
	]),
); // The Quick Brown Fox jumps over the Lazy Dog

console.log(
	titleCase("THE vitamins ARE IN my fresh CALIFORNIA raisins", [
		"are",
		"is",
		"in",
		"your",
		"my",
	]),
); // The Vitamins are in my Fresh California Raisins
