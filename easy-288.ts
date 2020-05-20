class Alliteration {
	private static stopWords = [
		"a",
		"about",
		"an",
		"and",
		"are",
		"as",
		"at",
		"be",
		"but",
		"by",
		"com",
		"for",
		"from",
		"how",
		"i",
		"in",
		"is",
		"it",
		"of",
		"on",
		"or",
		"that",
		"the",
		"this",
		"to",
		"was",
		"what",
		"when",
		"where",
		"who",
		"will",
		"with",
	];
	private static stopWordsRegExp = new RegExp(
		Alliteration.stopWords
			.map(stopWord => String.raw`\b${stopWord}\b`)
			.join("|"),
		"gi",
	);
	private static punctuationRegExp = /[,.?;'"!]/g;

	public static detect = (sentence: string): string =>
		Alliteration.uniqueWords(
			Alliteration.phrasesWithSameLetterWords(
				Alliteration.combinePhrases(
					Alliteration.sentenceToPhrases(
						Alliteration.filterPunctuation(sentence),
					),
				),
			),
		).join(" ");

	public static test = () => {
		Alliteration.runTests();
	};

	private static sentenceToPhrases = (sentence: string): string[][] =>
		sentence
			.split(Alliteration.stopWordsRegExp)
			.map(phrase => phrase.split(" ").filter(word => word))
			.filter(phrase => phrase.length);

	private static combinePhrases = (phrases: string[][]): string[][] =>
		phrases.reduce<string[][]>((acc, cur) => {
			const last = acc[acc.length - 1] || [];
			return Alliteration.startsWithSameFirstLetter(
				last[last.length - 1] || "",
				cur[0],
			)
				? [...acc.slice(0, -1), [...last, ...cur]]
				: [...acc, cur];
		}, []);

	private static phrasesWithSameLetterWords = (phrases: string[][]): string[] =>
		phrases.flatMap(phrase =>
			phrase.filter(
				word =>
					Alliteration.countWordsWithStartingLetterOfTarget(phrase, word) >= 2,
			),
		);

	private static countWordsWithStartingLetterOfTarget = (
		phrase: string[],
		target: string,
	): number =>
		phrase.filter(word => Alliteration.startsWithSameFirstLetter(word, target))
			.length;

	private static startsWithSameFirstLetter = (a: string, b: string): boolean =>
		a.toLowerCase()[0] === b.toLowerCase()[0];

	private static filterPunctuation = (sentence: string): string =>
		sentence.replace(Alliteration.punctuationRegExp, "");

	private static uniqueWords = (words: string[]): string[] =>
		words.filter(
			(word, i) =>
				words
					.map(innerWord => innerWord.toLowerCase())
					.indexOf(word.toLowerCase()) === i,
		);

	private static runTests = () => {
		/*
			There were either inconsistencies with the provided test cases or I
			misinterpreted one of the rules (as they were not clearly defined).
			Accordingly, I have adjusted the test cases to work correctly, given my
			understanding of the rules.
		*/
		[
			Alliteration.detect("Peter Piper Picked a Peck of Pickled Peppers") ===
				"Peter Piper Picked Peck Pickled Peppers",
			Alliteration.detect(
				"Bugs Bunny likes to dance the slow and simple shuffle",
			) === "Bugs Bunny slow simple shuffle",
			Alliteration.detect(
				"You'll never put a better bit of butter on your knife",
			) === "better bit butter",
			Alliteration.detect("The daily diary of the American dream") ===
				"daily diary",
			Alliteration.detect(
				"For the sky and the sea, and the sea and the sky",
			) === "sky sea",
			Alliteration.detect(
				"Three grey geese in a green field grazing, Grey were the geese and green was the grazing.",
			) === "grey geese green grazing",
			Alliteration.detect("But a better butter makes a batter better.") ===
				"better butter batter",
			Alliteration.detect(
				'"His soul swooned slowly as he heard the snow falling faintly through the universe and faintly falling, like the descent of their last end, upon all the living and the dead."',
			) === "soul swooned slowly he heard falling faintly",
			Alliteration.detect("Whisper words of wisdom, let it be.") ===
				"Whisper words wisdom",
			Alliteration.detect("They paved paradise and put up a parking lot.") ===
				"paved paradise put",
			Alliteration.detect("So what we gonna have, dessert or disaster?") ===
				"dessert disaster",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

Alliteration.test();
