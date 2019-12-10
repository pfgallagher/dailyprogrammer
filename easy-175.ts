const shuffle = (input: string): string => {
	const shuffledInput = [...input];
	for (let i = 0; i < input.length; i++) {
		const randomI = Math.floor(Math.random() * i);
		[shuffledInput[i], shuffledInput[randomI]] = [
			shuffledInput[randomI],
			shuffledInput[i],
		];
	}
	return shuffledInput.join("");
};

const bogo = (input: string, expectedOutput: string): string => {
	let counter = 0;
	let result = input;
	while (result !== expectedOutput) {
		result = shuffle(result);
		counter++;
	}
	return `${counter} iterations`;
};

console.log(bogo("lolhe", "hello"));
console.log(bogo("helloworld", "worldhello"));
