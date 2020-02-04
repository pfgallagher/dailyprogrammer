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
var bitPrecision = 32;
var numToBinaryStr = function (num) {
    return (num >>> 0)
        .toString(2)
        .slice(-bitPrecision)
        .padStart(bitPrecision, "0");
};
var XNOR = function (a, b) { return ~(a ^ b); };
var calculateCompatibility = function (a, b) {
    return __spread(numToBinaryStr(XNOR(a, b))).filter(function (dig) { return dig === "1"; }).length;
};
var findLeastCompatible = function (int) {
    return parseInt(numToBinaryStr(~int), 2);
};
var intMatch = function (intX, intY) {
    var xyCompatibility = Math.round((calculateCompatibility(intX, intY) / bitPrecision) * 100) + "%";
    var xLeastCompatible = findLeastCompatible(intX);
    var yLeastCompatible = findLeastCompatible(intY);
    return xyCompatibility + " Compatibility\n" + intX + " should avoid " + xLeastCompatible + "\n" + intY + " should avoid " + yLeastCompatible;
};
console.log(intMatch(20, 65515));
// 50% Compatibility
// 20 should avoid 4294967275
// 65515 should avoid 4294901780
console.log(intMatch(32000, 101));
// 69% Compatibility
// 32000 should avoid 4294935295
// 101 should avoid 4294967194
console.log(intMatch(42000, 42));
// 78% Compatibility
// 42000 should avoid 4294925295
// 42 should avoid 4294967253
console.log(intMatch(13, 12345));
// 84% Compatibility
// 13 should avoid 4294967282
// 12345 should avoid 4294954950
console.log(intMatch(9999, 9999));
// 100% Compatibility
// 9999 should avoid 4294957296
// 9999 should avoid 4294957296
console.log(intMatch(8008, 37331));
// 72% Compatibility
// 8008 should avoid 4294959287
// 37331 should avoid 4294929964
console.log(intMatch(54311, 2));
// 78% Compatibility
// 54311 should avoid 4294912984
// 2 should avoid 4294967293
console.log(intMatch(31200, 34335));
// 50% Compatibility
// 31200 should avoid 4294936095
// 34335 should avoid 4294932960
