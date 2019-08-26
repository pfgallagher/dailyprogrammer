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
var numerals = function () { return [
    {
        char: "M",
        count: 0
    },
    {
        char: "D",
        count: 0
    },
    {
        char: "C",
        count: 0
    },
    {
        char: "L",
        count: 0
    },
    {
        char: "X",
        count: 0
    },
    {
        char: "V",
        count: 0
    },
    {
        char: "I",
        count: 0
    },
]; };
var countNumerals = function (str) {
    var numeralList = new numerals();
    __spread(str).forEach(function (el) {
        var numeralObj = numeralList.find(function (obj) { return obj.char === el; });
        if (numeralObj) {
            numeralObj.count++;
        }
    });
    return numeralList;
};
var numeralXLessThanY = function (x, y) {
    var xNumerals = countNumerals(x);
    var yNumerals = countNumerals(y);
    for (var i = 0; i < xNumerals.length; i++) {
        var xCount = xNumerals[i].count;
        var yCount = yNumerals[i].count;
        if (xCount > yCount) {
            return false;
        }
        if (yCount > xCount) {
            return true;
        }
    }
    return false;
};
console.log(numeralXLessThanY("X", "VIIII")); // false
console.log(numeralXLessThanY("CX", "MX")); // true
console.log(numeralXLessThanY("MDX", "MDXI")); // true
console.log(numeralXLessThanY("MDX", "MDV")); // false
console.log(numeralXLessThanY("MDV", "MDV")); // false
