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
var calculateWordValue = function (word, length) {
    return __spread(word.toLowerCase()).reduce(function (acc, cur) { return (acc += cur.charCodeAt(0) - 96); }, 0) / length;
};
var sortByLetterPosition = function (arr) {
    return arr.sort(function (a, b) { return calculateWordValue(a, a.length) - calculateWordValue(b, b.length); });
};
console.log(sortByLetterPosition(["Shoe", "Hat"])); // ["Hat", "Shoe"]
