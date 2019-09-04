import { promises } from "fs";

const dailyProgrammerPost = `Your program will be responsible for analyzing a small chunk of text, the text of this entire dailyprogrammer description. Your task is to output the distinct words in this description, from highest to lowest count with the number of occurrences for each. Punctuation will be considered as separate words where they are not a part of the word.

The following will be considered their own words: " . , : ; ! ? ( ) [ ] { }

For anything else, consider it as part of a word.

Extra Credit:

Process the text of the ebook Metamorphosis, by Franz Kafka and determine the top 10 most frequently used words and their counts. (This will help for part 2)
`;

interface IAnalysisObject {
	[word: string]: number;
}

const textAnalyzer = (text: string): Array<[string, number]> => {
	const analysisObject: IAnalysisObject = {};
	text
		.split(/([ .,:;!?()[\]{}])|[\n\r]/)
		.filter(word => word && word !== " ")
		.forEach(word => {
			if (analysisObject[word]) {
				analysisObject[word]++;
			} else {
				analysisObject[word] = 1;
			}
		});
	return Object.entries(analysisObject).sort((a, b) => b[1] - a[1]);
};

console.log(textAnalyzer(dailyProgrammerPost));

(async () => {
	const metamorphosis = await promises.readFile("./easy-106-data.txt", "utf-8");
	console.log(textAnalyzer(metamorphosis));
})();
