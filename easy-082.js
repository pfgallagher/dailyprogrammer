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
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var calculateNumberOfSubstrings = function (n) { return (n * (n + 1)) / 2; };
// I suppose one could argue that using .substring is removing a bit of the
// difficulty. But, recreating the substring method can effectively be done with
// a single, basic for loop. So, I omitted it for brevity.
var findSubstrings = function (str) {
    var substrings = new Set();
    for (var i = 0; i <= str.length; i++) {
        for (var j = 0; j <= str.length; j++) {
            var substring = str.substring(i, j);
            if (substring) {
                substrings.add(substring);
            }
        }
    }
    return __spread(substrings);
};
var findSubstringsFromAlphabet = function (n) {
    var alphabetPortion = alphabet.slice(0, n);
    return findSubstrings(alphabetPortion);
};
console.log(findSubstringsFromAlphabet(5));
// ["a", "ab", "abc", "abcd", "abcde", "b", "bc", "bcd", "bcde", "c", "cd", "cde", "d", "de", "e"];
console.log(calculateNumberOfSubstrings(5)); // 15
console.log(findSubstrings("hello"));
// [ "h", "he", "hel", "hell", "hello", "e", "el", "ell", "ello", "l", "ll", "llo", "lo", "o"];
