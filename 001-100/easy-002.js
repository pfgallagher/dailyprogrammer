const inquirer = require("inquirer");

const questionBank = [{
	name: "principal",
	type: "input",
	message: "What is the principal amount?",
}, {
	name: "rate",
	type: "input",
	message: "What is the interest rate?",
}, {
	name: "time",
	type: "input",
	message: "How long will the money be invested (expressed as a decimal year)?",
}, {
	name: "compoundNumber",
	type: "input",
	message: "How many times per year is the interest compounded?",
}, {
	name: "intType",
	type: "input",
	message: "Type 'simple' to calculate simple interest or 'compound' to calculate compound interest.",
}];

const askTypeOfInterest = () => inquirer.prompt(questionBank.slice(4));
const simple = () => inquirer.prompt(questionBank.slice(0, 3));
const compound = () => inquirer.prompt(questionBank(0, 4));

const run = async () => {
	const {
		intType
	} = await askTypeOfInterest();

	if (intType === "simple") {
		let {
			principal,
			rate,
			time
		} = await simple();
		principal = principal.match(/\d/g).join("");
		if (rate.includes("%")) rate = parseFloat(rate.match(/\d/g).join("")) / 100;
		const result = parseFloat(principal) * parseFloat(rate) * parseFloat(time);
		console.log(`
		Principal: $${principal}
		Rate: ${parseFloat(rate) * 100}%
		Time: ${time} ${time === "1" ? "year" : "years"}
		Interest: $${result}
		Principal with Interest: $${parseFloat(principal) + result}
		`);

	} else if (intType === "compound") {
		let {
			principal,
			rate,
			time,
			compoundNumber
		} = await compound();
		principal = principal.match(/\d/g).join("");
		if (rate.includes("%")) rate = parseFloat(rate.match(/\d/g).join("")) / 100;
		const result = (parseFloat(principal) * ((1 + (parseFloat(rate) / parseFloat(compoundNumber))) ** (parseFloat(compoundNumber) * parseFloat(time)))) - parseFloat(principal);
		console.log(`
		Principal: $${principal}
		Rate: ${parseFloat(rate) * 100}%
		Time: ${time} ${time === "1" ? "year" : "years"}
		Compounding Frequency: ${compoundNumber} ${compoundNumber === "1" ? "time per year" : "times per year"}
		Interest: $${result}
		Principal with Interest: $${parseFloat(principal) + result}
		`);

	} else {
		console.log("Please enter 'simple' or 'compound'");
		run();
	}
};

run();
