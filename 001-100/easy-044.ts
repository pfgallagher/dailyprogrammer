interface ILongestInfo {
	longestSentence: string;
	sentenceLength: number;
	wordsLongerThanFourChars: string[];
}

const longest = (str: string): string => {
	const reduced = str.split(/(?<=[.!?]) /).reduce(
		(acc, cur): ILongestInfo => {
			const words = cur.split(" ");
			if (words.length > acc.sentenceLength) {
				acc.longestSentence = cur;
				acc.sentenceLength = words.length;
				acc.wordsLongerThanFourChars = words
					.map(word => word.replace(/[.!?;:,]/, ""))
					.filter(word => word.length > 4);
			}
			return acc;
		},
		{ longestSentence: "", sentenceLength: 0, wordsLongerThanFourChars: [""] },
	);
	const { longestSentence, sentenceLength, wordsLongerThanFourChars } = reduced;
	return `
Longest sentence: ${longestSentence}

Sentence length: ${sentenceLength} words

Words longer than four characters: ${wordsLongerThanFourChars.join(", ")}
`;
};

console.log(
	longest(
		"If it will feed nothing else, it will feed my revenge. He hath disgrac'd me and hind'red me half a million; laugh'd at my losses, mock'd at my gains, scorned my nation, thwarted my bargains, cooled my friends, heated mine enemies. And what's his reason? I am a Jew. Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions, fed with the same food, hurt with the same weapons, subject to the same diseases, healed by the same means, warmed and cooled by the same winter and summer, as a Christian is? If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge? If we are like you in the rest, we will resemble you in that. If a Jew wrong a Christian, what is his humility? Revenge. If a Christian wrong a Jew, what should his sufferance be by Christian example? Why, revenge. The villainy you teach me I will execute; and it shall go hard but I will better the instruction.",
	),
);
