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
var digitWordMap = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};
var twoDigitMap = {
    A: "Atta",
    B: "Bibbity",
    C: "City",
    D: "Dickety",
    E: "Ebbity",
    F: "Fleventy"
};
var fourDigitMap = {
    A: "Atta-bitey",
    B: "Bibbity-bitey",
    C: "City-bitey",
    D: "Dickety-bitey",
    E: "Ebbity-bitey",
    F: "Fleventy-bitey"
};
var isDigit = function (input) { return /\d/.test(input); };
var hexPronunciation = function (input) {
    var hexValue = input.slice(2);
    if (hexValue.length === 2) {
        return (twoDigitMap[hexValue[0]] + "-" + digitWordMap[hexValue[1]]).toLowerCase();
    }
    else if (hexValue.length === 4) {
        var addBitey = false;
        var _a = __read([hexValue.slice(0, 2), hexValue.slice(2)], 2), firstHalf = _a[0], secondHalf = _a[1];
        if (isDigit(firstHalf[1])) {
            firstHalf = fourDigitMap[firstHalf[0]];
        }
        else {
            addBitey = true;
            firstHalf = twoDigitMap[firstHalf[0]] + "-bee";
        }
        if (isDigit(secondHalf[1])) {
            secondHalf = twoDigitMap[secondHalf[0]] + "-" + digitWordMap[secondHalf[1]];
        }
        else {
            secondHalf = twoDigitMap[secondHalf[0]] + "-bee";
        }
        return ("" + firstHalf + (addBitey ? " bitey " : " ") + secondHalf).toLowerCase();
    }
    return hexValue;
};
console.log(hexPronunciation("0xF5"));
// "fleventy-five"
console.log(hexPronunciation("0xB3"));
// “bibbity-three”
console.log(hexPronunciation("0xE4"));
// “ebbity-four”
console.log(hexPronunciation("0xBBBB"));
// “bibbity-bee bitey bibbity-bee”
console.log(hexPronunciation("0xA0C9"));
// “atta-bitey city-nine”
