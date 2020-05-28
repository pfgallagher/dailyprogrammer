import { frequency } from "./lib/util";

type FreqObj = { [key: string]: number };

class Scrabble {
	public static canWordBeMade = (source: string, target: string): boolean => {
		const [sourceFreq, targetFreq] = [source, target].map(str =>
			Scrabble.strToFreqObj(str),
		);
		Scrabble.freqObjDiff(targetFreq, sourceFreq);
		return Scrabble.countFreqObj(targetFreq) - (sourceFreq["?"] || 0) <= 0;
	};

	public static test = () => {
		Scrabble.runTests();
	};

	private static strToFreqObj = (str: string): FreqObj => frequency([...str]);

	private static countFreqObj = (freqObj: FreqObj): number =>
		Object.values(freqObj).reduce((a, c) => a + c, 0);

	private static freqObjDiff = (
		minuendFreqObj: FreqObj,
		subtrahendFreqObj: FreqObj,
	): void => {
		for (const [char, count] of Object.entries(subtrahendFreqObj)) {
			if (minuendFreqObj.hasOwnProperty(char)) {
				minuendFreqObj[char] = Scrabble.subtractMinZero(
					minuendFreqObj[char],
					count,
				);
			}
		}
		return;
	};

	private static subtractMinZero = (a: number, b: number): number =>
		a - b >= 0 ? a - b : 0;

	private static runTests = () => {
		[
			Scrabble.canWordBeMade("ladilmy", "daily") === true,
			Scrabble.canWordBeMade("eerriin", "eerie") === false,
			Scrabble.canWordBeMade("orrpgma", "program") === true,
			Scrabble.canWordBeMade("orppgma", "program") === false,
			Scrabble.canWordBeMade("pizza??", "pizzazz") === true,
			Scrabble.canWordBeMade("a??????", "program") === true,
			Scrabble.canWordBeMade("piizza?", "pizzazz") === false,
			Scrabble.canWordBeMade("b??????", "program") === false,
		].forEach((test, i) => {
			console.assert(test, i.toString());
		});
	};
}

Scrabble.test();
