const followsIBeforeEExceptAfterC = (word: string): boolean => {
	let followsRule = true;
	const eiIndex = word.indexOf("ei");
	if (0 <= eiIndex) {
		if (word[eiIndex - 1] !== "c") {
			followsRule = false;
		}
	}
	if (word.includes("cie")) {
		followsRule = false;
	}
	return followsRule;
};

[
	followsIBeforeEExceptAfterC("fiery") === true,
	followsIBeforeEExceptAfterC("hierarchy") === true,
	followsIBeforeEExceptAfterC("hieroglyphic") === true,
	followsIBeforeEExceptAfterC("ceiling") === true,
	followsIBeforeEExceptAfterC("inconceivable") === true,
	followsIBeforeEExceptAfterC("receipt") === true,
	followsIBeforeEExceptAfterC("daily") === true,
	followsIBeforeEExceptAfterC("programmer") === true,
	followsIBeforeEExceptAfterC("one") === true,
	followsIBeforeEExceptAfterC("two") === true,
	followsIBeforeEExceptAfterC("three") === true,
	followsIBeforeEExceptAfterC("a") === true,
	followsIBeforeEExceptAfterC("zombie") === true,
	followsIBeforeEExceptAfterC("transceiver") === true,
	followsIBeforeEExceptAfterC("sleigh") === false,
	followsIBeforeEExceptAfterC("stein") === false,
	followsIBeforeEExceptAfterC("fahrenheit") === false,
	followsIBeforeEExceptAfterC("deifies") === false,
	followsIBeforeEExceptAfterC("either") === false,
	followsIBeforeEExceptAfterC("nuclei") === false,
	followsIBeforeEExceptAfterC("reimburse") === false,
	followsIBeforeEExceptAfterC("ancient") === false,
	followsIBeforeEExceptAfterC("juicier") === false,
	followsIBeforeEExceptAfterC("societies") === false,
	followsIBeforeEExceptAfterC("veil") === false,
	followsIBeforeEExceptAfterC("icier") === false,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
