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
var isPangram = function (input) {
    input.forEach(function (sentence) {
        console.log(__spread("abcdefghijklmnopqrstuvwxyz").every(function (char) {
            return sentence.toLowerCase().includes(char);
        }));
    });
};
isPangram([
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs",
    "Saxophones quickly blew over my jazzy hair",
]);
// true
// true
// false
