const inquirer = require("inquirer");

const askQuestions = () => {
	const questions = [{
		name: "name",
		type: "input",
		message: "What is your name?",
	}, {
		name: "age",
		type: "input",
		message: "How old are you?",
	}, {
		name: "username",
		type: "input",
		message: "What is your reddit username?",
	}, ];
	return inquirer.prompt(questions);
};

const run = async () => {
	const answers = await askQuestions();
	const {
		name,
		age,
		username
	} = answers;
	console.log(`Your name is ${name}, you are ${age} years old, and your reddit username is ${username}.`);
};

run();
