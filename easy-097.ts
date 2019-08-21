import { promises } from "fs";
const { readdir, readFile, stat } = promises;

const getStatsByType = async (path: string, type: string): Promise<void> => {
	const files = await readdir(path, "utf-8");
	files
		.filter(file => file.endsWith(type))
		.forEach(async file => {
			const { size } = await stat(file);
			let contents = await readFile(file, "utf-8");
			if (contents.length > 250) {
				contents = `${contents.slice(0, 250)}...`;
			}
			console.log(
				`
=== ${file} (${size} bytes)
${contents}
`,
			);
		});
};

getStatsByType("./", ".txt");
