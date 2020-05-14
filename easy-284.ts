import { promises } from "fs";

class SwipeWords {
	private words: string[] = [];

	private constructor(words: string[]) {
		this.words = words;
	}

	public static build = async (): Promise<SwipeWords> =>
		new SwipeWords(await SwipeWords.retrieveWordList());

	public findWords = (input: string): string =>
		this.words
			.filter(
				word =>
					this.startsAndEndsWithInputChars(word, input) &&
					this.containsTargetCharsInOrder(input, word),
			)
			.join(" ");

	private startsAndEndsWithInputChars = (
		word: string,
		input: string,
	): boolean =>
		word.startsWith(input[0]) && word.endsWith(input[input.length - 1]);

	private removeRepeatingChars = (word: string): string =>
		word.replace(/(\w)\1+/g, "$1");

	private containsTargetCharsInOrder = (
		input: string,
		target: string,
	): boolean =>
		new RegExp(`^${[...this.removeRepeatingChars(target)].join(".*")}$`).test(
			input,
		);

	private static retrieveWordList = async (): Promise<string[]> => {
		const wordList = await promises.readFile("./easy-284-data.txt", "utf-8");
		return wordList.split("\n").filter(word => word.length >= 5);
	};
}

(async () => {
	const swipeWords = await SwipeWords.build();
	console.assert(
		swipeWords.findWords("qwertyuytresdftyuioknn") === "queen question",
		"0",
	);
	console.assert(
		swipeWords.findWords("gijakjthoijerjidsdfnokg") ===
			"gaeing garring gathering gating geeing gieing going goring",
		"1",
	);
})();
