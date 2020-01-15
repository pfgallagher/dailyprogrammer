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
var oneToOneDifference = function (arrOne, arrTwo) {
    var arrTwoSlice = __spread(arrTwo);
    return arrOne.reduce(function (acc, cur) {
        var arrTwoI = arrTwoSlice.indexOf(cur);
        if (arrTwoI >= 0) {
            arrTwoSlice.splice(arrTwoI, 1);
            return acc;
        }
        return "" + acc + cur;
    }, "");
};
var wordsWithEnemies = function (wordOne, wordTwo) {
    var wordOneDiff = oneToOneDifference(__spread(wordOne), __spread(wordTwo));
    var wordTwoDiff = oneToOneDifference(__spread(wordTwo), __spread(wordOne));
    var result = "" + wordOneDiff + wordTwoDiff;
    var winner = wordOneDiff.length > wordTwoDiff.length
        ? wordOne
        : wordTwoDiff.length > wordOneDiff.length
            ? wordTwo
            : "tie";
    return "Resulting word: " + result + "\nWinner: " + winner;
};
console.log(wordsWithEnemies("hat", "cat"));
console.log(wordsWithEnemies("miss", "hiss"));
console.log(wordsWithEnemies("because", "cause"));
console.log(wordsWithEnemies("hello", "below"));
console.log(wordsWithEnemies("hit", "miss"));
console.log(wordsWithEnemies("rekt", "pwn"));
console.log(wordsWithEnemies("combo", "jumbo"));
console.log(wordsWithEnemies("critical", "optical"));
console.log(wordsWithEnemies("isoenzyme", "apoenzyme"));
console.log(wordsWithEnemies("tribesman", "brainstem"));
console.log(wordsWithEnemies("blames", "nimble"));
console.log(wordsWithEnemies("yakuza", "wizard"));
console.log(wordsWithEnemies("longbow", "blowup"));
