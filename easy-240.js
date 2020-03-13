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
var typoglycemia = function (input) {
    return input.replace(/(?<=\b\w)(\w+)(?=\w\b)/g, function (match) {
        return util_1.shuffle(__spread(match)).join("");
    });
};
console.log(typoglycemia("According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are,"));
console.log(typoglycemia("the only important thing is that the first and last letter be in the right place."));
console.log(typoglycemia("The rest can be a total mess and you can still read it without a problem."));
console.log(typoglycemia("This is because the human mind does not read every letter by itself, but the word as a whole."));
console.log(typoglycemia("Such a condition is appropriately called Typoglycemia."));
