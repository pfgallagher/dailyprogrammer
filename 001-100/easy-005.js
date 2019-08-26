const auth = require("./easy-005-data");
const inquirer = require("inquirer");

const askQuestions = () => {
	const questions = [
		{
			name: "username",
			type: "input",
			message: "Username:",
		},
		{
			name: "password",
			type: "password",
			message: "Password:",
		},
	];
	return inquirer.prompt(questions);
};

const run = async () => {
	const answers = await askQuestions();
	const { username, password } = answers;
	const userIdx = auth.logins.findIndex(el => el.username === username);
	if (userIdx >= 0 && auth.logins[userIdx].password === password)
		console.log("Access Granted.");
	else
		console.log("Access Denied: You entered the wrong username or password.");
};

run();
