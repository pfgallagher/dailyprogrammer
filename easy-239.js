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
var gameOfThrees = function (input) {
    var steps = [];
    while (input !== 1) {
        var step = !(input % 3) ? 0 : input % 3 === 1 ? -1 : 1;
        steps.push([input, step]);
        input = (input + step) / 3;
    }
    return __spread(steps.map(function (pair) { return pair.join(" "); }), ["1"]).join("\n");
};
console.log(gameOfThrees(100));
// 100 -1
// 33 0
// 11 1
// 4 -1
// 1
console.log(gameOfThrees(31337357));
// 31337357 1
// 10445786 1
// 3481929 0
// 1160643 0
// 386881 -1
// 128960 1
// 42987 0
// 14329 -1
// 4776 0
// 1592 1
// 531 0
// 177 0
// 59 1
// 20 1
// 7 -1
// 2 1
// 1
