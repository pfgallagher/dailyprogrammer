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
var isAlphabeticalWord = function (word) {
    var charCodes = __spread(word).map(function (char) { return char.charCodeAt(0); });
    var sortedCharCodes = __spread(charCodes).sort(function (a, b) { return a - b; });
    return charCodes.every(function (charCode, i) { return charCode === sortedCharCodes[i]; });
};
var isReverseAlphabeticalWord = function (word) {
    return isAlphabeticalWord(__spread(word).reverse().join(""));
};
var determineAlphabeticalWords = function (input) {
    var determinedWords = input.split("\n").map(function (word) {
        if (isAlphabeticalWord(word)) {
            return word + " IN ORDER";
        }
        if (isReverseAlphabeticalWord(word)) {
            return word + " IN REVERSE ORDER";
        }
        return word + " NOT IN ORDER";
    });
    return determinedWords.join("\n");
};
console.log(determineAlphabeticalWords("almost\ncereal"));
// almost IN ORDER
// cereal NOT IN ORDER
console.log(determineAlphabeticalWords("billowy\nbiopsy\nchinos\ndefaced\nchintz\nsponged\nbijoux\nabhors\nfiddle\nbegins\nchimps\nwronged"));
// billowy IN ORDER
// biopsy IN ORDER
// chinos IN ORDER
// defaced NOT IN ORDER
// chintz IN ORDER
// sponged IN REVERSE ORDER
// bijoux IN ORDER
// abhors IN ORDER
// fiddle NOT IN ORDER
// begins IN ORDER
// chimps IN ORDER
// wronged IN REVERSE ORDER
