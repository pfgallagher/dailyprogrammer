const chunkArr = <T>(arr: T[], size: number): T[] | T[][] => {
	const newArr = arr.slice();
	const chunk = newArr.splice(0, size);
	return chunk.length ? [chunk].concat(chunkArr(newArr, size)) : newArr;
};

const matrixCipherEncode = (str: string, shift: number): string => {
	const chunkedStrings = chunkArr([...str], shift);
	chunkedStrings.forEach((arr: string | string[]) => {
		if (arr.length < shift) {
			const difference = shift - arr.length;
			for (let i = 0; i < difference; i++) {
				if (Array.isArray(arr)) {
					arr.push(" ");
				} else if (typeof arr === "string") {
					arr += " ";
				}
			}
		}
	});
	const parsedArrs = Array(shift).fill("");
	chunkedStrings.forEach((chunkedString: string | string[]) => {
		[...chunkedString].forEach((char, i) => {
			parsedArrs[i] += char;
		});
	});
	return parsedArrs.join("");
};

const matrixCipherDecode = (str: string, shift: number): string =>
	matrixCipherEncode(str, Math.ceil(str.length / shift));

console.log(matrixCipherEncode("The cake is a lie!", 3));
console.log(matrixCipherDecode("T kiaihces eea  l!", 3));
console.log(matrixCipherEncode("The cake is a lie!", 7));
console.log(matrixCipherDecode("Telh ieie s!c  aa k", 7));

const bruteforce = (str: string, startPhrase: string): string => {
	for (let i = 1; i < str.length; i++) {
		const deciphered = matrixCipherDecode(str, i);
		if (deciphered.startsWith(startPhrase)) {
			return `
Key:${i}

Message: ${deciphered}`;
		}
	}
	return "Could not decipher message.";
};

console.log(
	bruteforce(
		"I rso wotTe,taef h  hl  socaeihtemonraaheamd svemsp l ems ayiN   Anofeadt.yueo oh ..  leaA .iaastnY.snw  do  d nyeuhl foor eiaotushlvrr.'oapee.avnv d  he,ey gOf   oiunrbpaunieeer r l geos ctoingoloyfq rcam  ilainpotlimadufhjv llt emiw aevsdnrsdriengieysr p tc ,tlfteuc uitwrrawavzo irhlez ftrelszloyyry bir  e huv no eadeauuyvsbs mtoe l.rb urat eeh y pOsreg fjnp,rocucee   otn cpgbmujltaayprgiayr uepfb btt,velyahe s,eogeraq  ue  ncysr.hcdzoo  ar duftTcioi'tahkmnarwxeeeegeae r  j",
		"It seems",
	),
);
