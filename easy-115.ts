import * as inquirer from "inquirer";

const askForNumber = () => {
	const input: inquirer.QuestionCollection = {
		message: "Enter a number:",
		name: "num",
		type: "input",
	};
	return inquirer.prompt(input);
};

const pickRandomNumber = (): number => Math.round(Math.random() * 100);

const printIntro = () =>
	console.log(
		`Welcome to the Guess-That-Number game! I have already picked a number from 1–100. Please make a guess or type "exit" to quit.`,
	);

const guessThatNumber = async () => {
	const randomNumber = pickRandomNumber();
	printIntro();
	let won = false;
	while (!won) {
		let { num } = await askForNumber();
		if (num === "exit") {
			return;
		}
		num = parseInt(num, 10);
		if (/[^0-9]/g.test(num)) {
			console.log("You must enter a number.");
		} else if (num < randomNumber) {
			console.log("Wrong; that number is below my number.");
		} else if (num > randomNumber) {
			console.log("Wrong; that number is above my number.");
		} else {
			won = true;
		}
	}
	console.log("Correct; that is my number, you win!");
	return;
};

guessThatNumber();
