const removeChars = (src, target) =>
	src.match(new RegExp(`[^${target}]`, "gi")).join("");

console.log(removeChars("Daily Programmer", "aeiou "));
