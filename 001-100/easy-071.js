// Naive brute force solution with *extremely performant* n^3 complexity...
// Tried to do some magic with fibonaci numbers, but I'll leave that for
// another time.
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
var pythagoreanTriples = function (n) {
    var triples = new Set();
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2) && i + j + k === n && i < j && j < k) {
                    triples.add([i, j, k].sort(function (a, b) { return a - b; }).toString());
                }
            }
        }
    }
    return __spread(triples).map(function (arr) { return arr.split(",").map(function (num) { return parseInt(num, 10); }); });
};
console.log(pythagoreanTriples(240));
