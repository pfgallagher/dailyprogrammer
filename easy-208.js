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
var cullRepeats = function (nums) {
    var numSet = new Set();
    nums.split(" ").forEach(function (num) {
        numSet.add(num);
    });
    return __spread(numSet).join(" ");
};
console.log(cullRepeats("1 1 2 2 3 3 4 4"));
// 1 2 3 4
console.log(cullRepeats("3 1 3 4 4 1 4 5 2 1 4 4 4 4 1 4 3 2 5 5 2 2 2 4 2 4 4 4 4 1"));
// 3 1 4 5 2
console.log(cullRepeats("65 36 23 27 42 43 3 40 3 40 23 32 23 26 23 67 13 99 65 1 3 65 13 27 36 4 65 57 13 7 89 58 23 74 23 50 65 8 99 86 23 78 89 54 89 61 19 85 65 19 31 52 3 95 89 81 13 46 89 59 36 14 42 41 19 81 13 26 36 18 65 46 99 75 89 21 19 67 65 16 31 8 89 63 42 47 13 31 23 10 42 63 42 1 13 51 65 31 23 28"));
// 65 36 23 27 42 43 3 40 32 26 67 13 99 1 4 57 7 89 58 74 50 8 86 78 54 61 19 85 31 52 95 81 46 59 14 41 18 75 21 16 63 47 10 51 28
