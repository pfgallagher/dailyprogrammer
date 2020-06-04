import { promises } from "fs";

class LetterSequence {
	private words: string[] = [];

	private constructor(words: string[]) {
		this.words = words;
	}

	public static build = async (): Promise<LetterSequence> =>
		new LetterSequence(await LetterSequence.retrieveWordList());

	public find = (sequence: string): string[] => {
		const sequenceRegExp = LetterSequence.sequenceToRegExp(sequence);
		return this.words.filter(word => sequenceRegExp.test(word));
	};

	public test = (): void => {
		this.runTests();
	};

	private static retrieveWordList = async (): Promise<string[]> => {
		const wordList = await promises.readFile("./easy-301-data.txt", "utf-8");
		return wordList.split("\n");
	};

	private static sequenceToRegExp = (sequence: string): RegExp =>
		LetterSequence.parsedSequenceToRegExp(
			LetterSequence.parseSequence(sequence),
		);

	private static parseSequence = (sequence: string): number[] => {
		const charMap: { [char: string]: number } = Object.fromEntries(
			[...new Set([...sequence])]
				.sort((a, b) => (a < b ? -1 : 1))
				.map((char, i) => [char, i + 1]),
		);
		return [...sequence].map(char => charMap[char]);
	};

	private static parsedSequenceToRegExp = (parsedSequence: number[]): RegExp =>
		new RegExp(
			parsedSequence
				.map((n, i, arr) => (arr.indexOf(n) === i ? "(\\w)" : `\\${n}`))
				.join(""),
		);

	private runTests = (): void => {
		[
			this.find("XXYY").length === 223,
			this.find("XXYYZZ").join(", ") ===
				"bookkeeper, bookkeepers, bookkeeping, bookkeepings",
			this.find("XXYYX").join(", ") ===
				"addressees, betweenness, betweennesses, colessees, fricassees, greenness, greennesses, heelless, keelless, keenness, keennesses, lessees, wheelless",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

(async () => {
	const letterSequence = await LetterSequence.build();
	letterSequence.test();
})();
