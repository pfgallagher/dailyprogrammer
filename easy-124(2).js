/*
    For whatever reason, it looks like there are two problems numbered 124.
    So, here's the second one.
*/
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
var edgeSorter = function (graphObj) {
    return Object.entries(graphObj)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], _c = __read(_b[1], 2), a = _c[0], b = _c[1];
        return [key, a + b];
    })
        .sort(function (_a, _b) {
        var _c = __read(_a, 2), aVal = _c[1];
        var _d = __read(_b, 2), bVal = _d[1];
        return aVal - bVal;
    })
        .map(function (_a) {
        var _b = __read(_a, 1), key = _b[0];
        return key;
    });
};
console.log(edgeSorter({
    A: [3, 4],
    B: [4, 5],
    C: [1, 2],
    D: [2, 3]
})); // ["C", "D", "A", "B"];
console.log(edgeSorter({
    F: [2, 3],
    B: [1, 2],
    D: [6, 5],
    C: [6, 7],
    E: [5, 4],
    A: [3, 4]
})); // ["B", "F", "A", "E", "D", "C"];
