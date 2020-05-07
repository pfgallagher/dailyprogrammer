import { chunkArr } from "./lib/util";

const lengthChars = (utf8: number[]): string[] =>
	(chunkArr([...utf8], 45) as number[][]).map(line =>
		String.fromCharCode(line.length + 32),
	);

const charCodeChunkToBinChunk = (charCodeChunk: number[]): string =>
	charCodeChunk.map(charCode => charCode.toString(2).padStart(8, "0")).join("");

const binChunkToUUEncodedLineArr = (binChunk: string): string[] =>
	(chunkArr([...binChunk], 6) as string[][]).map(subBinChunk =>
		String.fromCharCode(parseInt(subBinChunk.join(""), 2) + 32),
	);

const utf8ThreeByteChunk = (utf8: number[]): number[][] =>
	chunkArr(utf8, 3) as number[][];

const uuEncodedSixtyByteLine = (uuEncodedLineArr: string[]): string[][] =>
	chunkArr(uuEncodedLineArr, 60) as string[][];

const appendLineStartChars = (
	uuEncodedLines: string[][],
	lineStartChars: string[],
): string =>
	uuEncodedLines
		.map((line, i) => `${lineStartChars[i]}${line.join("")}`)
		.join("\n");

const uuEncode = (fileName: string, input: string): string => {
	/*
		I normally wouldn't use TextEncoder for a challenge like this, but I figured
		that utf-16 -> utf-8 conversion was out of the challenge's scope.
	*/
	const utf8 = [...new TextEncoder().encode(input)];
	const lineStartChars = lengthChars(utf8);
	while (utf8.length % 3) {
		utf8.push("0".charCodeAt(0));
	}
	const header = `begin 755 ${fileName}\n`;
	const body = appendLineStartChars(
		uuEncodedSixtyByteLine(
			utf8ThreeByteChunk(utf8)
				.map(charCodeChunk => charCodeChunkToBinChunk(charCodeChunk))
				.flatMap(binChunk => binChunkToUUEncodedLineArr(binChunk)),
		),
		lineStartChars,
	);
	const footer = "\n`\nend";
	return `${header}${body}${footer}`;
};

console.log(uuEncode("cat.txt", "Cat"), "\n");
// begin 755 cat.txt
// #0V%T
// `
// end
console.log(
	uuEncode(
		"file.txt",
		"I feel very strongly about you doing duty. Would you give me a little more documentation about your reading in French? I am glad you are happy — but I never believe much in happiness. I never believe in misery either. Those are things you see on the stage or the screen or the printed pages, they never really happen to you in life.",
	),
);
// begin 755 file.txt
// M22!F965L('9E<GD@<W1R;VYG;'D@86)O=70@>6]U(&1O:6YG(&1U='DN(%=O
// M=6QD('EO=2!G:79E(&UE(&$@;&ET=&QE(&UO<F4@9&]C=6UE;G1A=&EO;B!A
// M8F]U="!Y;W5R(')E861I;F<@:6X@1G)E;F-H/R!)(&%M(&=L860@>6]U(&%R
// M92!H87!P>2#B@)0@8G5T($D@;F5V97(@8F5L:65V92!M=6-H(&EN(&AA<'!I
// M;F5S<RX@22!N979E<B!B96QI979E(&EN(&UI<V5R>2!E:71H97(N(%1H;W-E
// M(&%R92!T:&EN9W,@>6]U('-E92!O;B!T:&4@<W1A9V4@;W(@=&AE('-C<F5E
// M;B!O<B!T:&4@<')I;G1E9"!P86=E<RP@=&AE>2!N979E<B!R96%L;'D@:&%P
// 3<&5N('1O('EO=2!I;B!L:69E+C P
// `
// end
