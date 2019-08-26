"use strict";
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
exports.__esModule = true;
var mappedOperators = {
    "*": function (a, b) { return a * b; },
    "+": function (a, b) { return a + b; },
    "-": function (a, b) { return a - b; },
    "/": function (a, b) { return a / b; }
};
var range = function (min, max) { return Array((max - min) + 1).fill(0).map(function (el, idx) { return idx + min; }); };
var formatRow = function (_a) {
    var _b = __read(_a), first = _b[0], rest = _b.slice(1);
    return first + "  |  " + rest.join("  ") + "\n";
};
var arithmeticTable = function (operator, n) {
    var elRange = range(0, n);
    var table = formatRow(__spread([operator], elRange));
    table += "-".repeat(table.length) + "\n";
    Object.keys(elRange).forEach(function (mainEl) {
        table += formatRow(__spread([mainEl], elRange.map(function (el) { return mappedOperators[operator](parseInt(mainEl, 10), el); })));
    });
    return table;
};
console.log(arithmeticTable("+", 4));
