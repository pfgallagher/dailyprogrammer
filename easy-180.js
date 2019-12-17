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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var countDigits = function (n) {
    var e_1, _a;
    var returnedArr = [];
    try {
        for (var _b = __values(__spread(n.toString())), _c = _b.next(); !_c.done; _c = _b.next()) {
            var num = _c.value;
            var lastEl = returnedArr[returnedArr.length - 1];
            if (lastEl && lastEl[1] === parseInt(num, 10)) {
                lastEl[0]++;
            }
            else {
                returnedArr.push([1, parseInt(num, 10)]);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return parseInt(returnedArr.flat().join(""), 10);
};
var calculateNthLookAndSayNumber = function (n) {
    var lookAndSayNumber = 1;
    for (var i = 1; i < n; i++) {
        lookAndSayNumber = countDigits(lookAndSayNumber);
    }
    return lookAndSayNumber;
};
console.log(calculateNthLookAndSayNumber(1)); // 1
console.log(calculateNthLookAndSayNumber(2)); // 11
console.log(calculateNthLookAndSayNumber(3)); // 21
console.log(calculateNthLookAndSayNumber(4)); // 1211
console.log(calculateNthLookAndSayNumber(5)); // 111221
console.log(calculateNthLookAndSayNumber(6)); // 312211
