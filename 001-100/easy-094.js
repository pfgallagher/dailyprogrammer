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
var easy_094_data_1 = require("./easy-094-data");
var highlight = function (str) { return easy_094_data_1.elements.reduce(function (acc, cur) {
    return acc.concat(__spread(str.matchAll(new RegExp(cur, "ig"))));
}, []).map(function (_a) {
    var chars = _a[0], i = _a.index, input = _a.input;
    return input && i !== undefined
        ? input.slice(0, i) + "[" + chars[0].toUpperCase() + chars.slice(1) + "]" + input.slice(i + chars.length)
        : "";
}); };
console.log(highlight("dailyprogrammer"));
console.log(highlight("H H H H H H"));
