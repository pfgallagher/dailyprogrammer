const isPangram = (input: string[]): void => {
	input.forEach(sentence => {
		console.log(
			[..."abcdefghijklmnopqrstuvwxyz"].every(char =>
				sentence.toLowerCase().includes(char),
			),
		);
	});
};

isPangram([
	"The quick brown fox jumps over the lazy dog.",
	"Pack my box with five dozen liquor jugs",
	"Saxophones quickly blew over my jazzy hair",
]);
// true
// true
// false
