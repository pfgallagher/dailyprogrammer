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
var qwerty = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
var uQwerty = qwerty.toUpperCase();
var unshiftText = function (text) {
    return __spread(text).map(function (char) {
        return qwerty.indexOf(char) >= 0
            ? qwerty[qwerty.indexOf(char) - 1]
            : uQwerty.indexOf(char) >= 0
                ? uQwerty[uQwerty.indexOf(char) - 1]
                : char;
    })
        .join("");
};
console.log(unshiftText("Jr;;p ept;f")); // "Hello World"
console.log(unshiftText("Lmiyj od ,u jrtp")); // "Knuth is my hero"
