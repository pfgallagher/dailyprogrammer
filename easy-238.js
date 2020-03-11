var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var consonants = __spread("bcdfghjklmnpqrstvwxyz");
var vowels = __spread("aeiou");
var getRandomChar = function (type) {
    return (type === "consonant" ? consonants : vowels)[Math.floor(Math.random() * (type === "consonant" ? 21 : 5))];
};
var randomWord = function (word) {
    return __spread(word.toLowerCase()).map(function (char) {
        return char === "c"
            ? getRandomChar("consonant")
            : char === "v"
                ? getRandomChar("vowel")
                : char;
    })
        .join("");
};
console.log(randomWord("cvcvcc"));
console.log(randomWord("CcvV"));
console.log(randomWord("cvcvcvcvcvcvcvcvcvcv"));
