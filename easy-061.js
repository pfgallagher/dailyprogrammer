// 357 -> 434 -> 217 -> 236 -> 118 -> 59 -> 61 -> 62 -> 31
// 101100101 -> 110110010 -> 11011001 -> 11101100 -> 1110110 -> 111011 -> 111101 -> 111110 -> 11111
// Write a program that given a number will print out the binary rotation sequence for that number (you only need to print out the sequence in decimal).
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
// What is the binary rotation sequence for 54321?
var binaryRotation = function (num) {
    var resultArr = [num];
    var nextNum = num;
    var lastNum = 0;
    while (nextNum !== lastNum) {
        lastNum = nextNum;
        var binaryNumber = nextNum.toString(2);
        var binaryArr = __spread(binaryNumber);
        var popped = binaryArr.pop();
        if (popped) {
            binaryArr.unshift(popped);
        }
        nextNum = parseInt(binaryArr.join(""), 2);
        if (nextNum !== resultArr[resultArr.length - 1]) {
            resultArr.push(nextNum);
        }
    }
    return resultArr.join(" -> ");
};
console.log(binaryRotation(19)); // 19 -> 25 -> 28 -> 14 -> 7
console.log(binaryRotation(69)); // 69 -> 98 -> 49 -> 56 -> 28 -> 14 -> 7
console.log(binaryRotation(205)); // 205 -> 230 -> 115 -> 121 -> 124 -> 62 -> 31
console.log(binaryRotation(357)); // 357 -> 434 -> 217 -> 236 -> 118 -> 59 -> 61 -> 62 -> 31
console.log(binaryRotation(54321)); //  54321 -> 59928 -> 29964 -> 14982 -> 7491 -> 7841 -> 8016 -> 4008 -> 2004 -> 1002 -> 501 -> 506 -> 253 -> 254 -> 127
