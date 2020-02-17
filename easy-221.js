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
var horizToVert = function (word) { return __spread(word).map(function (char) { return char; }); };
function padWord(wordOrWordArr, n) {
    var pad = function (word) { return "" + " ".repeat(n) + word; };
    if (Array.isArray(wordOrWordArr)) {
        return wordOrWordArr.map(function (word) { return pad(word); });
    }
    return pad(wordOrWordArr);
}
var wordSnake = function (input) {
    var wordArr = input.split(" ");
    var result = [wordArr[0]];
    var padLength = wordArr[0].length - 1;
    wordArr.slice(1).forEach(function (word, i) {
        if (!(i % 2)) {
            result.push(padWord(horizToVert(word.slice(1)), padLength));
        }
        else {
            result.push(padWord(word, padLength));
            padLength += word.length - 1;
        }
    });
    return result.flat().join("\n");
};
console.log(wordSnake("SHENANIGANS SALTY YOUNGSTER ROUND DOUBLET TERABYTE ESSENCE"));
console.log(wordSnake("DELOREAN NEUTER RAMSHACKLE EAR RUMP PALINDROME EXEMPLARY YARD"));
console.log(wordSnake("CAN NINCOMPOOP PANTS SCRIMSHAW WASTELAND DIRK KOMBAT TEMP PLUNGE ESTER REGRET TOMBOY"));
console.log(wordSnake("NICKEL LEDERHOSEN NARCOTRAFFICANTE EAT TO OATS SOUP PAST TELEMARKETER RUST THINGAMAJIG GROSS SALTPETER REISSUE ELEPHANTITIS"));
