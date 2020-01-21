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
var hexToBitmap = function (input) {
    return input
        .split(" ")
        .map(function (el) {
        return __spread(Number("0x" + el)
            .toString(2)
            .padStart(8, "0")).map(function (char) { return (parseInt(char, 10) ? "x" : " "); })
            .join("");
    })
        .join("\n");
};
console.log(hexToBitmap("18 3C 7E 7E 18 18 18 18"));
//    xx
//   xxxx
//  xxxxxx
//  xxxxxx
//    xx
//    xx
//    xx
//    xx
console.log("\n");
console.log(hexToBitmap("FF 81 BD A5 A5 BD 81 FF"));
// xxxxxxxx
// x      x
// x xxxx x
// x x  x x
// x x  x x
// x xxxx x
// x      x
// xxxxxxxx
console.log("\n");
console.log(hexToBitmap("AA 55 AA 55 AA 55 AA 55"));
// x x x x
//  x x x x
// x x x x
//  x x x x
// x x x x
//  x x x x
// x x x x
//  x x x x
console.log("\n");
console.log(hexToBitmap("3E 7F FC F8 F8 FC 7F 3E"));
// xxxxx
// xxxxxxx
// xxxxxx
// xxxxx
// xxxxx
// xxxxxx
// xxxxxxx
//  xxxxx
console.log("\n");
console.log(hexToBitmap("93 93 93 F3 F3 93 93 93"));
// x  x  xx
// x  x  xx
// x  x  xx
// xxxx  xx
// xxxx  xx
// x  x  xx
// x  x  xx
// x  x  xx
