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
var testStrOps = function (inputArr) {
    return inputArr.forEach(function (input) {
        var _a = __read(input, 3), op = _a[0], testStr = _a[1], resultStr = _a[2];
        var passed = false;
        if (!op) {
            var reversed = __spread(testStr).reverse().join("");
            if (resultStr === reversed) {
                passed = true;
            }
        }
        else {
            var capitalized = testStr.toUpperCase();
            if (resultStr === capitalized) {
                passed = true;
            }
        }
        var testOutcome = passed ? "Good test data" : "Mismatch! Bad test data";
        console.log(testOutcome);
    });
};
console.log(testStrOps([
    [0, "Car", "raC"],
    [0, "Alpha", "AhplA"],
    [0, "Discuss", "noissucsiD"],
    [1, "Batman", "BATMAN"],
    [1, "Graph", "GRAPH"],
    [1, "One", "one"],
]));
