import { promises } from "fs";

const reverseLinesAndWords = async (input: string, output: string): Promise<void> => {
	const contents = await promises.readFile(input, "utf-8");
	const reversed = contents
		.split("\n")
		.reverse()
		.map(line =>
			line
				.split(" ")
				.reverse()
				.join(" "),
		)
		.join("\n");
		await promises.writeFile(output, reversed);
};

reverseLinesAndWords("./easy-095-data.txt", "./easy-095-result.txt");
