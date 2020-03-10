import { promises } from "fs";

const getWordList = async (): Promise<string> =>
	promises.readFile("./easy-237-data.txt", "utf-8");

const brokenKeyboard = async (workingKeys: string): Promise<string> =>
	(await getWordList())
		.split("\n")
		.filter(word => new RegExp(`^[${workingKeys}]+$`, "gi").test(word))
		.sort((a, b) => b.length - a.length)[0];

(async () => {
	const test1 = await brokenKeyboard("abcd");
	console.log(test1);
	// abaca
	const test2 = await brokenKeyboard("qwer");
	console.log(test2);
	// weewee
	const test3 = await brokenKeyboard("hjklo");
	console.log(test3);
	// holloo
	const test4 = await brokenKeyboard("edcf");
	console.log(test4);
	// deeded
	const test5 = await brokenKeyboard("bnik");
	console.log(test5);
	// bikini
	const test6 = await brokenKeyboard("poil");
	console.log(test6);
	// lollipop
	const test7 = await brokenKeyboard("vybu");
	console.log(test7);
	// bubby
})();
