const extractPunctsAndCaps = (input: string): Array<[string, number]> => {
	const punctsAndCaps: Array<[string, number]> = [];
	[...input].forEach((char, i) => {
		if (/[A-Z]/.test(char)) {
			punctsAndCaps.push(["capital", i]);
		}
		if (/[^ \w]/.test(char)) {
			punctsAndCaps.push([char, i]);
		}
	});
	return punctsAndCaps.sort((a, b) => a[1] - b[1]);
};

const mangleSentence = (input: string): string => {
	const punctsAndCaps = extractPunctsAndCaps(input);
	const caps: Array<[string, number]> = [];
	const puncts: Array<[string, number]> = [];
	punctsAndCaps.forEach(entry => {
		if (entry[0] === "capital") {
			caps.push(entry);
		} else {
			puncts.push(entry);
		}
	});
	const sortedSentence = [
		...input
			.replace(/[^ \w]/g, "")
			.toLowerCase()
			.split(" ")
			.map(word =>
				[...word].sort((a, b) => (a < b ? -1 : b < a ? 1 : 0)).join(""),
			)
			.join(" "),
	];
	puncts.forEach(([char, i]) => {
		sortedSentence.splice(i, 0, char);
	});
	caps.forEach(([char, i]) => {
		sortedSentence[i] = sortedSentence[i].toUpperCase();
	});
	return sortedSentence.join("");
};

console.log(mangleSentence("This challenge doesn't seem so hard."));
// Hist aceeghlln denos't eems os adhr.
console.log(
	mangleSentence(
		"There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy.",
	),
);
// Eehrt aer emor ghinst beeentw aeehnv adn aehrt, Ahioort, ahnt aer ademrt fo in oruy hhilooppsy.
console.log(
	mangleSentence(
		"Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog.",
	),
);
// Eey fo Entw, adn Eot fo Fgor, Loow fo Abt, adn Egnotu fo Dgo
console.log(
	mangleSentence(
		"Adder's fork, and Blind-worm's sting, Lizard's leg, and Howlet's wing.",
	),
);
// Adder's fkor, adn Bdilm-nors'w ginst, Adilrs'z egl, adn Ehlost'w ginw.
console.log(
	mangleSentence(
		"For a charm of powerful trouble, like a hell-broth boil and bubble.",
	),
);
// For a achmr fo eflopruw belortu, eikl a behh-llort bilo adn bbbelu.
