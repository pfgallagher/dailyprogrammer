interface IKey {
	key: string;
	keyWithShift: string;
	keyWithCapsLock: string;
	keyWithShiftAndCapsLock: string;
}

const chars = "abcdefghijklmnopqrstuvwxyz1234567890`-=[]\\;',./";
const modifiedChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~_+{}|:"<>?`;
const keys: IKey[] = [];
[...chars].forEach((char, i) => {
	keys.push({
		key: char,
		keyWithCapsLock: char.toUpperCase(),
		keyWithShift: modifiedChars[i],
		keyWithShiftAndCapsLock: modifiedChars[i].toLowerCase(),
	});
});

const keyToChar = (key: string, shift: boolean, capsLock: boolean): string => {
	const foundKey = keys.find(eachKey => eachKey.key === key);
	if (foundKey) {
		if (shift && capsLock) {
			return foundKey.keyWithShiftAndCapsLock;
		}
		if (shift) {
			return foundKey.keyWithShift;
		}
		if (capsLock) {
			return foundKey.keyWithCapsLock;
		}
		return foundKey.key;
	}
	return "Invalid Key";
};

console.log(keyToChar("a", false, false));
console.log(keyToChar("a", true, false));
console.log(keyToChar("a", true, true));
console.log(keyToChar("1", false, false));
console.log(keyToChar("1", true, false));
console.log(keyToChar("1", true, true));
console.log(keyToChar("[", false, false));
console.log(keyToChar("[", true, false));
console.log(keyToChar("[", true, true));
