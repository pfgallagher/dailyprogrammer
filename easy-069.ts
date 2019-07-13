// Not gonna lie, this is pretty hacky.
// It would definitely benefit from some refactoring, but I try to timebox these
// challenges pretty tightly.

const createColumn = (title: string, inputs: string[]) => {
	const longestColumnLength = Math.max(
		...(inputs as string[]).map(input => input.length),
		title.length,
	);
	const titleDifference = Math.floor((longestColumnLength - title.length) / 2);
	const parityOffset = titleDifference % 2 ? 1 : 2;
	const formattedTitle = `|${" ".repeat(titleDifference)}${title} ${" ".repeat(
		titleDifference + parityOffset,
	)}|`;
	const formattedInputs = (inputs as string[])
		.map(input => `| ${input.padEnd(longestColumnLength, " ")} |`)
		.reduce((acc, cur) => `${acc}\n${cur}`);
	const divider = `+${"-".repeat(longestColumnLength + 2)}+`;
	return `${divider}
${formattedTitle}
${divider}
${formattedInputs}
${divider}`;
};

const createTable = (
	titles: string | string[],
	inputs: string[] | string[][],
): string => {
	if (typeof titles === "string") {
		return createColumn(titles, inputs as string[]);
	}
	const columns: any[] = [];
	titles.forEach((title, i) => {
		columns.push(createColumn(title, inputs[i] as string[]).split("\n"));
	});
	const arr = Array(columns[0].length).fill([]);
	for (let i = 0; i < columns.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i > 0) {
				arr[j] = arr[j].concat(columns[i][j].slice(1));
			} else {
				arr[j] = arr[j].concat(columns[i][j]);
			}
		}
	}
	return arr.map(el => el.flat().join("")).join("\n");
};

console.log(
	createTable("Necessities", [
		"fairy",
		"cakes",
		"happy",
		"fish",
		"disgustipated",
		"melon-balls",
	]),
);

console.log(
	createTable(
		["Name", "Address", "Description"],
		[
			["Reddit", "Wikipedia", "xkcd"],
			["www.reddit.com", "en.wikipedia.net", "xkcd.com"],
			[
				"The frontpage of the internet",
				"The Free Encyclopedia",
				"Sudo make me a sandwich.",
			],
		],
	),
);
