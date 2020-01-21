import * as inquirer from "inquirer";
import { range } from "../lib/util";

const selectRandomEl = (arr: any[]): number =>
	Math.floor(Math.random() * arr.length);

const askForRange = () => {
	const input: inquirer.QuestionCollection = {
		message: "Enter a space-delimited range:",
		name: "rangeResponse",
		type: "input",
	};
	return inquirer.prompt(input);
};

const askProblem = (problem: string) => {
	const input: inquirer.QuestionCollection = {
		message: `What is ${problem}?`,
		name: "problemResponse",
		type: "input",
	};
	return inquirer.prompt(input);
};

const arithmetic = async () => {
	const { rangeResponse } = await askForRange();
	if (rangeResponse === "q") {
		return;
	}
	const rangeArr: [number, number] = rangeResponse.length
		? rangeResponse.split(" ").map((num: string) => parseInt(num, 10))
		: [0, 10];
	const selectedRange = range(...rangeArr);
	const possibleOperands = [];
	for (let i = 0; i < 4; i++) {
		possibleOperands.push(selectedRange[selectRandomEl(selectedRange)]);
	}
	const randomOperation = () => ["+", "-", "*"][selectRandomEl(range(0, 2))];
	const problemText = `${possibleOperands[0]} ${randomOperation()} ${
		possibleOperands[1]
	} ${randomOperation()} ${possibleOperands[2]} ${randomOperation()} ${
		possibleOperands[3]
	} `;
	const correctAnswer = Function(`return ${problemText}`)();
	const { problemResponse } = await askProblem(problemText);
	if (problemResponse === "q") {
		return;
	}
	const formattedAnswer = parseInt(problemResponse, 10);
	if (formattedAnswer === correctAnswer) {
		console.log("Correct!");
	} else {
		console.log("Incorrect...");
	}
	arithmetic();
};

arithmetic();
