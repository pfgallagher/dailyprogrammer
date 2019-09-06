var charCodeArrsToStrings = function (charCodeArrs, originalNumStr) {
    return charCodeArrs
        .filter(function (charCodeArr) {
        return charCodeArr.join("") === originalNumStr &&
            charCodeArr.every(function (charCode) { return parseInt(charCode, 10) <= 26; });
    })
        .map(function (charCodeArr) {
        return charCodeArr
            .map(function (charCode) { return String.fromCharCode(parseInt(charCode, 10) + 96); })
            .join("");
    });
};
var findPossibleCombos = function (numStr, memo) {
    if (memo === void 0) { memo = []; }
    var possibilities = [];
    if (!numStr.length) {
        possibilities.push(memo);
    }
    for (var i = 0, j = Math.min(2, numStr.length); i <= j; i++) {
        var letter = numStr.slice(0, i);
        if (letter) {
            var newMemo = memo ? memo.concat(letter) : [letter];
            possibilities = possibilities.concat(findPossibleCombos(numStr.slice(i), newMemo));
        }
    }
    return possibilities;
};
var decode = function (numStr) {
    return charCodeArrsToStrings(findPossibleCombos(numStr), numStr);
};
console.log(decode("85121215"));
console.log(decode("123"));
