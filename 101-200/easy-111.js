var starRemove = function (text) { return text.replace(/.?\*{1,}.?/g, ""); };
console.log(starRemove("adf*lp")); // "adp"
console.log(starRemove("a*o")); // ""
console.log(starRemove("*dech*")); // "ec"
console.log(starRemove("de**po")); // "do"
console.log(starRemove("sa*n*ti")); // "si"
console.log(starRemove("abc")); // "abc"
