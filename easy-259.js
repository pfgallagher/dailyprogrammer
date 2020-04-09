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
var util_1 = require("./lib/util");
var keyCoords = function (key) {
    return util_1.divmod("123456789.0".indexOf(key), 3);
};
var measureIPAddressDistance = function (ipAddress) {
    return __spread(ipAddress).reduce(function (a, c, i, arr) {
        return arr[i - 1] ? a + util_1.distance(keyCoords(c), keyCoords(arr[i - 1])) : a;
    }, 0)
        .toFixed(2) + "cm";
};
console.log(measureIPAddressDistance("7851"));
// 3.41cm
console.log(measureIPAddressDistance("219.45.143.143"));
// 27.38cm
console.log(measureIPAddressDistance("123456789.0"));
// 13.71cm
