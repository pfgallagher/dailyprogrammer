import * as inquirer from "inquirer";
import { data, IQuestion } from "./easy-033-data";

const dataToQuestion = (
	question: IQuestion,
	idx: number,
): inquirer.Question => ({
	message: question.question,
	name: `${idx}`,
	type: "input",
});

let curQuestion: number = 0;
let outOfQuestions: boolean = false;
const questionsArr = data.map((el, i) => dataToQuestion(el, i));

const askQuestion = (idx: number) => {
	if (questionsArr[idx]) {
		const question = questionsArr[idx];
		return inquirer.prompt(question);
	}
	outOfQuestions = true;
};

const run = async () => {
	while (!outOfQuestions) {
		const answer = await askQuestion(curQuestion);
		if (answer) {
			if (answer[curQuestion] === "exit") {
				break;
			}
			if (answer[curQuestion] === data[curQuestion].answer) {
				console.log("Correct!");
			} else {
				console.log(
					`Incorrect. The correct answer was ${data[curQuestion].answer}.`,
				);
			}
		}
		curQuestion++;
	}
};

run();
