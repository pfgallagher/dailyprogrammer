import { escapeRegExp } from "./lib/util";

class H4X0R {
	private static charTo1337Map: { [char: string]: string } = {
		A: "4",
		B: "6",
		E: "3",
		I: "|",
		L: "1",
		M: "(V)",
		N: "(\\)",
		O: "0",
		S: "5",
		T: "7",
		V: "\\/",
		W: "`//",
	};
	private static leetToCharMap: { [leet: string]: string } = Object.fromEntries(
		Object.entries(H4X0R.charTo1337Map).map(entry => entry.reverse()),
	);

	public static translate = (input: string): string =>
		H4X0R.isProbably1337(input)
			? H4X0R.leetToEnglish(input)
			: H4X0R.englishTo1337(input);

	public static test = () => {
		H4X0R.runTests();
	};

	private static englishTo1337 = (input: string): string =>
		[...input.toUpperCase()]
			.map(char =>
				char in H4X0R.charTo1337Map ? H4X0R.charTo1337Map[char] : char,
			)
			.join("");

	private static leetToEnglish = (input: string): string => {
		Object.entries(H4X0R.leetToCharMap).forEach(([k, v]) => {
			input = input.replace(new RegExp(escapeRegExp(k), "g"), v);
		});
		return input.toLowerCase();
	};

	private static isProbably1337 = (input: string) => /[\d()\\/`]/g.test(input);

	private static runTests = () => {
		[
			H4X0R.translate("BASIC") === "645|C",
			H4X0R.translate("ELEET") === "31337",
			H4X0R.translate("WOW") === "`//0`//",
			H4X0R.translate("MOM") === "(V)0(V)",
			H4X0R.translate("31337") === "eleet",
			H4X0R.translate("storm") === "570R(V)",
			H4X0R.translate("I am elite.") === "| 4(V) 31|73.",
			H4X0R.translate("Da pain!") === "D4 P4|(\\)!",
			H4X0R.translate("Eye need help!") === "3Y3 (\\)33D H31P!",
			H4X0R.translate("3Y3 (\\)33d j00 t0 g37 d4 d0c70r.") ===
				"eye need joo to get da doctor.",
			H4X0R.translate("| n33d m4 p|llz!") === "i need ma pillz!",
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

H4X0R.test();
