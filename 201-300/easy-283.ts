export {};

const isLetter = (char: string): boolean => /[a-z]/.test(char);

const lettersOfWord = (word: string): string[] =>
	[...word.toLowerCase()]
		.filter(char => isLetter(char))
		.sort((a, b) => (a < b ? -1 : 1));

const inputToWordArrs = (input: string): string[][] =>
	input
		.replace(/"/g, "")
		.split("?")
		.map(word => lettersOfWord(word));

const wordDifference = (
	oneLetters: string[],
	twoLetters: string[],
): string[] => {
	const [longest, shortest] =
		oneLetters.length < twoLetters.length
			? [twoLetters, oneLetters]
			: [oneLetters, twoLetters];
	const diff: string[] = [];
	longest.forEach((letter, i) => {
		const correspondingLetter = shortest[i];
		if (correspondingLetter && letter !== correspondingLetter) {
			diff.push(correspondingLetter);
		} else if (!correspondingLetter) {
			diff.push(letter);
		}
	});
	return diff;
};

const isAnagram = ([lettersOne, lettersTwo]: string[][]): boolean =>
	lettersOne.length !== lettersTwo.length
		? false
		: !wordDifference(lettersOne, lettersTwo).length;

const anagramDetector = (input: string): string =>
	input.replace(
		"?",
		`is ${isAnagram(inputToWordArrs(input)) ? "" : "NOT "}an anagram of`,
	);

[
	anagramDetector('"Clint Eastwood" ? "Old West Action"') ===
		'"Clint Eastwood" is an anagram of "Old West Action"',
	anagramDetector('"parliament" ? "partial man"') ===
		'"parliament" is NOT an anagram of "partial man"',
	anagramDetector('"wisdom" ? "mid sow"') ===
		'"wisdom" is an anagram of "mid sow"',
	anagramDetector('"Seth Rogan" ? "Gathers No"') ===
		'"Seth Rogan" is an anagram of "Gathers No"',
	anagramDetector('"Reddit" ? "Eat Dirt"') ===
		'"Reddit" is NOT an anagram of "Eat Dirt"',
	anagramDetector('"Schoolmaster" ? "The classroom"') ===
		'"Schoolmaster" is an anagram of "The classroom"',
	anagramDetector('"Astronomers" ? "Moon starer"') ===
		'"Astronomers" is NOT an anagram of "Moon starer"',
	anagramDetector('"Vacation Times" ? "I\'m Not as Active"') ===
		'"Vacation Times" is an anagram of "I\'m Not as Active"',
	anagramDetector('"Dormitory" ? "Dirty Rooms"') ===
		'"Dormitory" is NOT an anagram of "Dirty Rooms"',
].forEach((test, i) => {
	console.assert(test, i.toString());
});
