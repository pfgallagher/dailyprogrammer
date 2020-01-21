import { promises } from "fs";
import { PNG } from "pngjs";

const average = ([red, green, blue]: number[]): number =>
	Math.round((red + green + blue) / 3);

const convertToGrayscale = async (
	input: string,
	output: string,
): Promise<void> => {
	const fileContents = await promises.readFile(input);
	const processedPNG = PNG.sync.read(fileContents);
	const { data } = processedPNG;
	for (let i = 0; i < data.length; i += 4) {
		const [red, green, blue] = [data[i], data[i + 1], data[i + 2]];
		const averageColor = average([red, green, blue]);
		data[i] = averageColor;
		data[i + 1] = averageColor;
		data[i + 2] = averageColor;
	}
	const newPNG = PNG.sync.write(processedPNG);
	await promises.writeFile(output, newPNG);
};

convertToGrayscale("./easy-179-before-image.png", "./easy-179-after-image.png");
