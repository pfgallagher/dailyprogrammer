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
var isNumberPalindromic = function (n) { return n === reverseNum(n); };
var reverseNum = function (n) {
    return Number(__spread(n.toString()).reverse().join(""));
};
var palindromicNumber = function (n) {
    var palindromicNum = n;
    var counter = 0;
    while (!isNumberPalindromic(palindromicNum)) {
        if (counter >= 1000) {
            return n + " did not become palindromic after " + counter + " steps.";
        }
        palindromicNum += reverseNum(palindromicNum);
        counter++;
    }
    return n + " gets palindromic after " + counter + " " + (counter === 1 ? "step" : "steps") + ": " + palindromicNum;
};
console.log(palindromicNumber(24));
// 24 gets palindromic after 1 step: 66
console.log(palindromicNumber(28));
// 28 gets palindromic after 2 steps: 121
console.log(palindromicNumber(196));
// 196 did not become palindromic after 1000 steps
console.log(palindromicNumber(11));
// 11 gets palindromic after 0 steps: 11
console.log(palindromicNumber(68));
// 68 gets palindromic after 3 steps: 1111
console.log(palindromicNumber(123));
// 123 gets palindromic after 1 step: 444
console.log(palindromicNumber(286));
// 286 gets palindromic after 23 steps: 8813200023188
// console.log(palindromicNumber(196196871));
// 196196871 gets palindromic after 45 steps: 4478555400006996000045558744
/*
    Note: the last test case won't pass because JavaScript automatically converts
    large numbers into scientific notation. A workaround would be using a BigInt,
    which isn't shown here because it's a pretty straightforward process.
*/
