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
var splitAndParseEquation = function (eq) {
    var _a = __read(eq
        .replace("y=", "")
        .split(/(y=)/)
        .join("")
        .split(/x([+-])|x/), 3), firstTerm = _a[0], _b = _a[1], sign = _b === void 0 ? "+" : _b, secondTerm = _a[2];
    var parsedFirstTerm = parseFloat(firstTerm);
    var parsedSecondTerm = (secondTerm ? parseFloat(secondTerm) : 0) * (sign === "+" ? 1 : -1);
    return [parsedFirstTerm, parsedSecondTerm];
};
var linearIntersection = function (eqOne, eqTwo) {
    var _a = __read(splitAndParseEquation(eqOne), 2), eqOneFirstTerm = _a[0], eqOneSecondTerm = _a[1];
    var _b = __read(splitAndParseEquation(eqTwo), 2), eqTwoFirstTerm = _b[0], eqTwoSecondTerm = _b[1];
    var x = (eqTwoSecondTerm - eqOneSecondTerm) / (eqOneFirstTerm - eqTwoFirstTerm);
    var y = eqOneFirstTerm * x + eqOneSecondTerm;
    return [x, y];
};
console.log(linearIntersection("y=2x+2", "y=5x-4")); // [2, 6]
console.log(linearIntersection("y=-5x", "y=-4x+1")); // [-1, 5]
console.log(linearIntersection("y=0.5x+1.3", "y=-1.4x-0.2")); // [-0.7895, 0.9053]
