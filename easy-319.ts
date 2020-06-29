const compressDuplicates = (input: string): string =>
	input.replace(/(.+)\s+\1+/g, "$1");

console.log(compressDuplicates("I heard the pastor sing live verses easily."));
// I heard the pastor sing liverses easily.
console.log(
	compressDuplicates(
		"Deep episodes of Deep Space Nine came on the television only after the news.",
	),
);
// Deepisodes of Deep Space Nine came on the televisionly after the news.
console.log(compressDuplicates("Digital alarm clocks scare area children."));
// Digitalarm clockscarea children.
