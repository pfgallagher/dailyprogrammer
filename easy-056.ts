const abacabaSequence = (): void => {
	let char = 97;
	let lastIteration = "";
	while (char <= 122) {
		const curIteration = `${lastIteration}${String.fromCharCode(
			char,
		)}${lastIteration}`;
		console.log(curIteration);
		lastIteration = curIteration;
		char++;
	}
};

// abacabaSequence();
