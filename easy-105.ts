import { promises } from "fs";
import { difference } from "./lib/util";

const unscrambler = async (word: string) => {
	const validWords = await promises.readFile("./easy-105-data.txt", "utf-8");
	const validWordArr = validWords.split("\r\n");
	const unscrambledWords = validWordArr.filter(
		validWord =>
			[...word].every(char => validWord.includes(char)) &&
			!difference([...word].sort(), [...validWord].sort()).length &&
			word.length === validWord.length,
	);
	return unscrambledWords;
};

(async () => {
	console.log(await unscrambler("ramrtuaegd")); // dramaturge
	console.log(await unscrambler("elloh")); // hello
	console.log(await unscrambler("dgo")); // dog, god
	console.log(await unscrambler("wrtie")); // twier, write
	console.log(await unscrambler("tei")); // tie
	console.log(await unscrambler("sned")); // dens, ends, send, sned
	console.log(await unscrambler("nerdowtu")); // undertow
	console.log(await unscrambler("trerdmay")); // martyred
	console.log(await unscrambler("etsle")); // leets, sleet, steel, stele, teels, teles, tells
	console.log(await unscrambler("tanotoconin")); // connotation, incantation
	console.log(await unscrambler("lnoesesshomew")); // wholesomeness
	console.log(await unscrambler("woedlreg")); // glowered, reglowed
})();
