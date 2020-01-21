// I'm using Invidious to retrieve comments, since YouTube's API has locked up considerably over the years.
import axios from "axios";
import { promises } from "fs";

const buildRegex = (wordList: string): RegExp =>
	new RegExp(
		`(${wordList
			.split("\r\n")
			.filter(word => !/\W/.test(word) && word)
			.join("|")})`,
		"gi",
	);

const scrape = async (
	youtubeURL: string,
	numPagesToScrape: number,
): Promise<string> => {
	const scrapedComments: string[] = [];
	let continuation = "";
	try {
		for (let i = 0; i < numPagesToScrape; i++) {
			const { data } = await axios.get(
				`https://invidio.us/api/v1/comments/${youtubeURL}?format=json&hl=en-US${
					continuation ? `&continuation=${continuation}` : ""
				}`,
			);
			const comments: string[] = data.comments.map(
				(comment: any) => comment.content,
			);
			comments.forEach(comment => {
				scrapedComments.push(comment);
			});
			continuation = data.continuation;
		}
		const commentsString = scrapedComments.join(" ");
		const happyWords = await promises.readFile(
			"./easy-190-happy-words.txt",
			"utf-8",
		);
		const sadWords = await promises.readFile(
			"./easy-190-sad-words.txt",
			"utf-8",
		);
		const happyMatches = commentsString.match(buildRegex(happyWords));
		const sadMatches = commentsString.match(buildRegex(sadWords));
		const sentiments =
			happyMatches &&
			sadMatches &&
			(happyMatches.length > sadMatches.length
				? "mostly happy"
				: sadMatches.length > happyMatches.length
				? "mostly sad"
				: "neutral");
		return `Based on a sample size of ${
			scrapedComments.length
		} comments, the sentiments for this video are ${sentiments}. There were ${
			happyMatches ? happyMatches.length : 0
		} happy keywords and ${sadMatches ? sadMatches.length : 0} sad keywords.`;
	} catch (error) {
		return `Scraping failed:\n${error}`;
	}
};

(async () => {
	const result = await scrape("dQw4w9WgXcQ", 2);
	console.log(result);
})();
