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
var convertToBase = function (num, base) {
    var value = "";
    var quotient = num;
    while (quotient !== 0) {
        var remainder = quotient % base;
        var adjust = remainder >= 10 ? 55 : 48;
        value = "" + String.fromCharCode(remainder + adjust) + value;
        quotient = Math.floor(quotient / base);
    }
    return value;
};
console.log(convertToBase(1234, 2)); // 10011010010
console.log(convertToBase(1234, 16)); // 4D2
console.log(convertToBase(12345678, 23)); // 1L2FHE
console.log(convertToBase(12345678, 19)); // 4IDHAA
console.log(convertToBase(19959694, 35)); // DAILY
console.log(convertToBase(376609378180550, 29)); // PROGRAMMER
var basePalindromeFinder = function (num) {
    var results = [];
    for (var i = 2; i <= 36; i++) {
        var convertedBase = convertToBase(num, i);
        var reversed = __spread(convertedBase).reverse().join("");
        if (convertedBase === reversed) {
            results.push(i);
        }
    }
    return results;
};
console.log(basePalindromeFinder(16708)); // [ 7, 8, 27, 34, 35 ]
console.log(basePalindromeFinder(12321)); // [ 10, 36 ]
console.log(basePalindromeFinder(15167)); // [ 9, 27, 28, 35, 36 ]
console.log(basePalindromeFinder(10858)); // [ 4, 8, 26, 29, 32, 35 ]
