import snoowrap from "snoowrap";
import "./secrets";

const clientSecret = process.env.REDDIT_SECRET || "";
const refreshToken = process.env.REDDIT_REFRESH_TOKEN || "";
const clientId = process.env.REDDIT_CLIENT_ID || "";
const userAgent = process.env.REDDIT_USER_AGENT || "";

const requester = new snoowrap({
	clientId,
	clientSecret,
	refreshToken,
	userAgent,
});

const getChallenges = async (): Promise<string> => {
	const challengeRegExp = /Challenge #(\d+)/;
	const posts = await requester.getNew("dailyprogrammer", {
		limit: 10,
	});
	return (
		posts
			.map(post => {
				const num = post.title.match(challengeRegExp);
				return {
					number: num ? num[1] : "-1",
					title: post.title,
					url: post.url,
				};
			})
			.map(post => ({ ...post, number: parseInt(post.number, 10) }))
			.filter(post => post.number >= 0 && challengeRegExp.test(post.title))
			.sort((a, b) => a.number - b.number)
			/*
			The challenge instructions said to format these as a markdown table, but
			I don't see much benefit to doing that. So, I've settled for a sorted
			markdown list instead.
		*/
			.map(post => `[${post.title}](${post.url})`)
			.join("\n")
	);
};

(async () => {
	const challenges = await getChallenges();
	console.log(challenges);
})();
