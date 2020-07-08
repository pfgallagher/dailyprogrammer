interface IParsedName {
	[key: string]: string;
}

const parseName = (name: string): IParsedName => {
	const [elName, symbol] = name.toLowerCase().split(", ");
	const [symOne, symTwo] = [...symbol];
	return {
		elName,
		symbol,
		symOne,
		symTwo,
	};
};

const followsNamingRules = ({
	elName,
	symbol,
	symOne,
	symTwo,
}: IParsedName): boolean =>
	symbol.length === 2 &&
	[...symbol].every(letter => elName.includes(letter)) &&
	elName.indexOf(symOne) < elName.lastIndexOf(symTwo) &&
	(symOne === symTwo
		? elName.indexOf(symOne) !== elName.lastIndexOf(symTwo)
		: true);

const isValidSymbol = (name: string): boolean =>
	followsNamingRules(parseName(name));

console.log(isValidSymbol("Spenglerium, Ee"));
// true
console.log(isValidSymbol("Zeddemorium, Zr"));
// true
console.log(isValidSymbol("Venkmine, Kn"));
// true
console.log(isValidSymbol("Stantzon, Zt"));
// false
console.log(isValidSymbol("Melintzum, Nn"));
// false
console.log(isValidSymbol("Tullium, Ty"));
// false
