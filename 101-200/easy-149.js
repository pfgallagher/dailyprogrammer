var disemvoweler = function (input) {
    var vowels = [];
    var disemvoweledStr = input.replace(/([aeiou ])/g, function (match) {
        if (match !== " ") {
            vowels.push(match);
        }
        return "";
    });
    return [disemvoweledStr, vowels.join("")];
};
console.log(disemvoweler("two drums and a cymbal fall off a cliff")); // ["twdrmsndcymblfllffclff", "ouaaaaoai"]
console.log(disemvoweler("all those who believe in psychokinesis raise my hand")); // ["llthswhblvnpsychknssrsmyhnd", "aoeoeieeioieiaiea"]
console.log(disemvoweler("did you hear about the excellent farmer who was outstanding in his field")); // ["ddyhrbtthxcllntfrmrwhwststndngnhsfld", "ioueaaoueeeeaeoaouaiiiie"]
