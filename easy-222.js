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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var calcAlphaVal = function (char) { return char.charCodeAt(0) - 64; };
var weighSplitWord = function (word) {
    var leftVal = 0;
    var rightVal = 0;
    var _a = __read(word, 3), left = _a[0], splitChar = _a[1], right = _a[2];
    for (var i = 0; i <= left.length - 1; i++) {
        leftVal += (left.length - i) * calcAlphaVal(left[i]);
    }
    for (var i = 0; i <= right.length - 1; i++) {
        rightVal += (i + 1) * calcAlphaVal(right[i]);
    }
    return [leftVal, rightVal];
};
var findSplitCombos = function (word) {
    var combos = [];
    for (var i = 0; i < word.length - 1; i++) {
        combos.push([word.slice(0, i), word.slice(i, i + 1), word.slice(i + 1)]);
    }
    return combos.filter(function (arr) { return arr.every(function (el) { return el; }); });
};
var balanceWord = function (word) {
    var e_1, _a;
    var splitCombos = findSplitCombos(word);
    try {
        for (var splitCombos_1 = __values(splitCombos), splitCombos_1_1 = splitCombos_1.next(); !splitCombos_1_1.done; splitCombos_1_1 = splitCombos_1.next()) {
            var splitWord = splitCombos_1_1.value;
            var weight = weighSplitWord(splitWord);
            if (weight[0] === weight[1]) {
                return splitWord.join(" ") + " - " + weight[0];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (splitCombos_1_1 && !splitCombos_1_1.done && (_a = splitCombos_1["return"])) _a.call(splitCombos_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return word + " DOES NOT BALANCE";
};
console.log(balanceWord("STEAD"));
// S T EAD - 19
console.log(balanceWord("CONSUBSTANTIATION"));
// CONSUBST A NTIATION - 456
console.log(balanceWord("WRONGHEADED"));
// WRO N GHEADED - 120
console.log(balanceWord("UNINTELLIGIBILITY"));
// UNINTELL I GIBILITY - 521
console.log(balanceWord("SUPERGLUE"));
// SUPERGLUE DOES NOT BALANCE
