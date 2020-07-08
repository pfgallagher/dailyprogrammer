// @ts-ignore
import { default as tone } from "tonegenerator";
// @ts-ignore
import { default as waveHeader } from "waveheader";

import * as fs from "fs";
import { spawn } from "child_process";

type Tone = number[];
type WavHeader = Buffer;

/*
	This challenge was, as one might expect, pretty difficult to do with Node.
	Thankfully, I found some helpful libraries to deal with .wav files, although
	they are a bit dated and getting them to play nicely with TypeScript was a bit
	hacky. Additonally, the play function will probably only work correctly on Mac
	since it uses `afplay`. 
*/
class Sound {
	public static scaleFreqs = [
		261.63,
		293.66,
		329.63,
		349.23,
		392.0,
		440.0,
		493.88,
	];
	public static aMajorChordFreqs = [440, 554.37, 659.26];

	public static play = async (n: number): Promise<void> =>
		new Promise((res, rej) => {
			try {
				const play = spawn("afplay", [`easy-300-output${n}.wav`]);
				play.on("exit", () => {
					res();
				});
			} catch (error) {
				rej(error);
			}
		});

	public static createWav = (
		freqs: number[],
		type: "sequence" | "chord",
		n: number,
	): void => {
		const file = fs.createWriteStream(`easy-300-output${n}.wav`);
		const tones =
			type === "sequence" ? Sound.sequence(freqs, 0.5) : Sound.chord(freqs);

		file.write(Sound.wavHeader(tones));
		file.write(Buffer.from(Sound.signedToUnsigned(tones)));
		file.end();
	};

	private static sequence = (freqArr: number[], lengthInSecs: number): Tone[] =>
		freqArr.map(freq => Sound.generateTone(freq, lengthInSecs));

	private static chord = (freqArr: number[]): Tone => {
		const [first, ...rest] = Sound.sequence(freqArr, 2);
		rest.forEach(otherFreq => {
			otherFreq.forEach((val, i) => {
				first[i] += val;
			});
		});
		return first;
	};

	private static generateTone = (freq: number, lengthInSecs: number): Tone =>
		tone({ freq, lengthInSecs, volume: 15 });

	private static wavHeader = (tones: Tone | Tone[]): WavHeader =>
		waveHeader(tones.flat(Infinity).length, { bitdepth: 8 });

	private static signedToUnsigned = (tones: Tone | Tone[]): Uint8Array =>
		Uint8Array.from(tones.flat(Infinity) as number[], val => val + 128);
}

(async () => {
	Sound.createWav(Sound.scaleFreqs, "sequence", 0);
	Sound.createWav(Sound.aMajorChordFreqs, "chord", 1);
	await Sound.play(0);
	await Sound.play(1);
})();
