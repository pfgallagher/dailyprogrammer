const fsp = require("fs").promises;
const wordWrap = require("word-wrap");

const alignText = async (filePath, direction) => {
	try {
		const fileContents = await fsp.readFile(filePath, "utf-8");
		const wrapped = fileContents
			.split("\n")
			.map(el => wordWrap(el, { width: 80, indent: "" }))
			.join("\n")
			.split("\n");
		let aligned =
			direction === "right"
				? wrapped.map(el =>
					el.length > 0 && el.length < 80 ? el.padStart(80) : el,
				  )
				: wrapped.map(el => el.trimStart());
		aligned = aligned.join("\n");
		await fsp.writeFile("./easy-015-data.txt", aligned);
	} catch (error) {
		console.log(error);
	}
};

// alignText("./easy-015-data.txt", "left");
// alignText("./easy-015-data.txt", "right");
