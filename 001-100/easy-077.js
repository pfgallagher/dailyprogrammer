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
var countLength = function (morse) {
    return __spread(morse).reduce(function (acc, cur) {
        if (cur === ".") {
            acc++;
        }
        else if (cur === "-") {
            acc += 2;
        }
        return acc;
    }, 0);
};
var generateCombos = function (n) {
    var maxBinaryNum = Math.pow(2, n);
    var combos = new Set();
    var _loop_1 = function (i) {
        combos.add(__spread(i.toString(2)).map(function (el) { return (el === "0" ? "." : "-"); }).join(""));
        if (i <= n) {
            __spread(combos).filter(function (el) { return el.length < n; })
                .forEach(function (combo) {
                combos.add(combo.padStart(i, "."));
            });
        }
    };
    for (var i = 0; i <= maxBinaryNum; i++) {
        _loop_1(i);
    }
    return __spread(combos).filter(function (el) { return countLength(el) === n; });
};
console.log(generateCombos(5));
console.log(generateCombos(10));
// I couldn't figure out a way to make it performant enough to calculate much
// larger than say, n = 20... I think that it's largely due to JavaScript's
// efficiency (or relative lack thereof), but it's hard to say without trying it
// in another language.
