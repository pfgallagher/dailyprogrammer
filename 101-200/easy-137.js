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
var transposeStrings = function (input) {
    var _a = __read(input.split("\n")), words = _a.slice(1);
    var maxWordLength = Math.max.apply(Math, __spread(words.map(function (word) { return word.length; })));
    var _loop_1 = function (i) {
        var transposedRow = "";
        words.forEach(function (word) {
            transposedRow += word[i] ? word[i] : " ";
        });
        console.log(transposedRow);
    };
    for (var i = 0; i < maxWordLength; i++) {
        _loop_1(i);
    }
};
transposeStrings("1\nHello, World!");
// H
// e
// l
// l
// o
// ,
//
// W
// o
// r
// l
// d
// !
transposeStrings("5\nKernel\nMicrocontroller\nRegister\nMemory\nOperator");
// KMRMO
// eieep
// rcgme
// nrior
// eosra
// lctyt
//  oe o
//  nr r
//  t
//  r
//  o
//  l
//  l
//  e
//  r
