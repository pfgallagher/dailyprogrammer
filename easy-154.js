var decodeBracketMessage = function (input) {
    var wordArr = [];
    var bracketsOnly = input.replace(/[{(]/g, "[").replace(/[})]/g, "]");
    while (/[\[\]]/g.test(bracketsOnly)) {
        var opening = bracketsOnly.indexOf("[") + 1;
        var closing = bracketsOnly.lastIndexOf("]");
        bracketsOnly = bracketsOnly.slice(opening, closing);
        var unbracketedText = bracketsOnly.replace(/\[.+\]/g, "");
        wordArr.unshift(unbracketedText);
    }
    return wordArr.join(" ").replace(/ {2,}/g, " ");
};
console.log(decodeBracketMessage("(String of words with matching bracket sets in an order that can only be called mad)"));
// String of words with matching bracket sets in an order that can only be called mad
console.log(decodeBracketMessage("((your[drink {remember to}]) ovaltine)"));
// remember to drink your ovaltine
console.log(decodeBracketMessage("[racket for {brackets (matching) is a} computers]"));
// matching brackets is a racket for computers
console.log(decodeBracketMessage("[can {and it(it (mix) up ) } look silly]"));
// mix it up and it can look silly
