import { zip } from "./lib/util";

class AlphabetCipher {
	private static headers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static chart: { [char: string]: string } = {
		A: "abcdefghijklmnopqrstuvwxyz",
		B: "bcdefghijklmnopqrstuvwxyza",
		C: "cdefghijklmnopqrstuvwxyzab",
		D: "defghijklmnopqrstuvwxyzabc",
		E: "efghijklmnopqrstuvwxyzabcd",
		F: "fghijklmnopqrstuvwxyzabcde",
		G: "ghijklmnopqrstuvwxyzabcdef",
		H: "hijklmnopqrstuvwxyzabcdefg",
		I: "ijklmnopqrstuvwxyzabcdefgh",
		J: "jklmnopqrstuvwxyzabcdefghi",
		K: "klmnopqrstuvwxyzabcdefghij",
		L: "lmnopqrstuvwxyzabcdefghijk",
		M: "mnopqrstuvwxyzabcdefghijkl",
		N: "nopqrstuvwxyzabcdefghijklm",
		O: "opqrstuvwxyzabcdefghijklmn",
		P: "pqrstuvwxyzabcdefghijklmno",
		Q: "qrstuvwxyzabcdefghijklmnop",
		R: "rstuvwxyzabcdefghijklmnopq",
		S: "stuvwxyzabcdefghijklmnopqr",
		T: "tuvwxyzabcdefghijklmnopqrs",
		U: "uvwxyzabcdefghijklmnopqrst",
		V: "vwxyzabcdefghijklmnopqrstu",
		W: "wxyzabcdefghijklmnopqrstuv",
		X: "xyzabcdefghijklmnopqrstuvw",
		Y: "yzabcdefghijklmnopqrstuvwx",
		Z: "zabcdefghijklmnopqrstuvwxy",
	};

	public static encode = (message: string, keyword: string): string => {
		const [formattedKey, formattedMessage] = [
			AlphabetCipher.formatKey(message, keyword),
			message,
		].map(word => word.toUpperCase());
		let encodedWord = "";
		for (const [first, second] of zip(
			[...formattedKey],
			[...formattedMessage],
		)) {
			encodedWord +=
				AlphabetCipher.chart[second][AlphabetCipher.headers.indexOf(first)];
		}
		return encodedWord;
	};

	public static test = () => {
		AlphabetCipher.runTests();
	};

	private static formatKey = (message: string, keyword: string): string => {
		let formattedKey = keyword;
		while (formattedKey.length < message.length) {
			formattedKey += formattedKey;
		}
		return formattedKey.slice(0, message.length);
	};

	private static runTests = () => {
		[
			AlphabetCipher.encode("thepackagehasbeendelivered", "snitch") ===
				"lumicjcnoxjhkomxpkwyqogywq",
			AlphabetCipher.encode("theredfoxtrotsquietlyatmidnight", "bond") ===
				"uvrufrsryherugdxjsgozogpjralhvg",
			AlphabetCipher.encode("murderontheorientexpress", "train") ===
				"flrlrkfnbuxfrqrgkefckvsa",
			AlphabetCipher.encode("themolessnuckintothegardenlastnight", "garden") ===
				"zhvpsyksjqypqiewsgnexdvqkncdwgtixkx",
			AlphabetCipher.encode("", "") === "",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

AlphabetCipher.test();
