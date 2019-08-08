const strToCharCodeArr = (str: string): number[] =>
	[...str].map(char => char.charCodeAt(0));

const charCodeArrToStr = (charCodeArr: number[]): string =>
	charCodeArr.map(charCode => String.fromCharCode(charCode)).join("");

const encipherVigenere = (plaintext: string, key: string): string => {
	const plaintextArr = strToCharCodeArr(plaintext);
	const keyArr = strToCharCodeArr(
		[...plaintext].map((char, i) => key[i % key.length]).join(""),
	);
	return charCodeArrToStr(
		plaintextArr.map((char, i) => ((char + keyArr[i] - 130) % 26) + 65),
	);
};

const decipherVigenere = (ciphertext: string, key: string): string => {
	const ciphertextArr = strToCharCodeArr(ciphertext);
	const keyArr = strToCharCodeArr(
		[...ciphertext].map((char, i) => key[i % key.length]).join(""),
	);
	return charCodeArrToStr(
		ciphertextArr.map((char, i) => ((char - keyArr[i] + 130) % 26) + 65),
	);
};

console.log(encipherVigenere("THECAKEISALIE", "GLADOS")); // ZSEFOCKTSDZAK
console.log(decipherVigenere("ZSEFOCKTSDZAK", "GLADOS")); // THECAKEISALIE

console.log(
	decipherVigenere(
		"HSULAREFOTXNMYNJOUZWYILGPRYZQVBBZABLBWHMFGWFVPMYWAVVTYISCIZRLVGOPGBRAKLUGJUZGLNBASTUQAGAVDZIGZFFWVLZSAZRGPVXUCUZBYLRXZSAZRYIHMIMTOJBZFZDEYMFPMAGSMUGBHUVYTSABBAISKXVUCAQABLDETIFGICRVWEWHSWECBVJMQGPRIBYYMBSAPOFRIMOLBUXFIIMAGCEOFWOXHAKUZISYMAHUOKSWOVGBULIBPICYNBBXJXSIXRANNBTVGSNKR",
		"BEGINNING",
	),
);
