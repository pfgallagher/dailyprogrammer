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
var ln = "+--+";
var l = "|   ";
var r = "   |";
var lr = "|  |";
var ws = "    ";
var mappings = {
    "0": [ln, lr, lr, lr, ln],
    "1": [ws, r, r, r, r],
    "2": [ln, r, ln, l, ln],
    "3": [ln, r, ln, r, ln],
    "4": [ws, lr, ln, r, r],
    "5": [ln, l, ln, r, ln],
    "6": [ln, l, ln, lr, ln],
    "7": [ln, r, r, r, r],
    "8": [ln, lr, ln, lr, ln],
    "9": [ln, lr, ln, r, ln]
};
var numberdisplay = function (input) {
    return __spread(input.toString()).map(function (num) { return mappings[num]; })
        .reduce(function (acc, cur) {
        if (cur) {
            cur.forEach(function (el, i) {
                acc[i].push(el);
            });
        }
        return acc;
    }, Array(input.toString().length + 1)
        .fill(0)
        .map(function (el) { return []; }))
        .map(function (el) { return el.join("  "); })
        .join("\n");
};
console.log(numberdisplay(5362));
console.log(numberdisplay(1234567890));
