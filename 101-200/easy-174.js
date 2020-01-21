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
var flipBits = function (binaryString) {
    return __spread(binaryString).map(function (num) { return (num === "1" ? "0" : "1"); }).join("");
};
var thueMorseSeq = function (n) {
    var result = "0";
    for (var i = 0; i < n; i++) {
        result = "" + result + flipBits(result);
    }
    return result;
};
console.log(thueMorseSeq(0)); // 0
console.log(thueMorseSeq(1)); // 01
console.log(thueMorseSeq(2)); // 0110
console.log(thueMorseSeq(3)); // 01101001
console.log(thueMorseSeq(4)); // 0110100110010110
console.log(thueMorseSeq(5)); // 01101001100101101001011001101001
console.log(thueMorseSeq(6)); // 0110100110010110100101100110100110010110011010010110100110010110
