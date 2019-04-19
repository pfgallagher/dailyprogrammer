const inquirer = require("inquirer");

const askForList = () => {
	const questions = [
		{
			name: "data",
			type: "input",
			message:
				"Enter a comma-separated list of numbers or strings to be sorted. (Do not include brackets or quotation marks)",
		},
	];
	return inquirer.prompt(questions);
};

const run = async () => {
	const answers = await askForList();
	const data = answers.data.split(",");
	if (data.every(el => !isNaN(parseFloat(el))))
		console.log(
			data
				.map(el => parseFloat(el))
				.sort((a, b) => a - b)
				.join(", "),
		);
	else console.log(data.sort().join(", "));
};

run();
