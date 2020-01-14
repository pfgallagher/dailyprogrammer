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
var isbnValidator = function (isbn) {
    return !(__spread(isbn.replace(/-/g, "")).map(function (el) { return (el === "X" ? "10" : el); })
        .reduce(function (acc, cur, i) { return acc + (10 - i) * parseInt(cur, 10); }, 0) % 11);
};
console.log(isbnValidator("0-7475-3269-9"));
// true
console.log(isbnValidator("1-5688-1111-X"));
// true
console.log(isbnValidator("9-9999-9999-X"));
// false
