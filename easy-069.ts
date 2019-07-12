const createColumn = (title: string, inputs: string[]): string => {
	const longestColumnLength = Math.max(
		...inputs.map(input => input.length),
		title.length,
	);
	const titleDifference = (longestColumnLength - title.length) / 2;
	const formattedTitle = `| ${" ".repeat(titleDifference)}${title}${" ".repeat(
		titleDifference,
	)} |`;
	const formattedInputs = inputs
		.map(input => `| ${input.padEnd(longestColumnLength, " ")} |`)
		.reduce((acc, cur) => `${acc}\n${cur}`);
	const divider = `+${"-".repeat(longestColumnLength + 2)}+`;
	return `${divider}
${formattedTitle}
${divider}
${formattedInputs}
${divider}`;
};

console.log(
	createColumn("Necessities", [
		"fairy",
		"cakes",
		"happy",
		"fish",
		"disgustipated",
		"melon-balls",
	]),
);
