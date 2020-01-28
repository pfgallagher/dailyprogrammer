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
var recurrenceRelation = function (input) {
    var _a = __read(input.split("\n"), 3), operation = _a[0], start = _a[1], end = _a[2];
    var operations = operation.split(" ");
    var _b = __read([start, end].map(function (num) { return parseInt(num, 10); }), 2), startNum = _b[0], endNum = _b[1];
    var resultArr = [startNum];
    var last = startNum;
    while (resultArr.length <= endNum) {
        var result = operations.reduce(
        // 'safer' alternative to eval()
        function (acc, cur) { return Function("return " + acc + cur)(); }, last);
        last = result;
        resultArr.push(result);
    }
    return resultArr.map(function (el, i) { return "Term " + i + ": " + el; }).join("\n");
};
console.log(recurrenceRelation("*3 +2 *2\n0\n7"));
// Term 0: 0
// Term 1: 4
// Term 2: 28
// Term 3: 172
// Term 4: 1036
// Term 5: 6220
// Term 6: 37324
// Term 7: 223948
console.log(recurrenceRelation("*2 +1\n1\n10"));
// Term 0: 1
// Term 1: 3
// Term 2: 7
// Term 3: 15
// Term 4: 31
// Term 5: 63
// Term 6: 127
// Term 7: 255
// Term 8: 511
// Term 9: 1023
// Term 10: 2047
console.log(recurrenceRelation("*-2\n1\n8"));
// Term 0: 1
// Term 1: -2
// Term 2: 4
// Term 3: -8
// Term 4: 16
// Term 5: -32
// Term 6: 64
// Term 7: -128
// Term 8: 256
console.log(recurrenceRelation("+2 *3 -5\n0\n10"));
// Term 0: 0
// Term 1: 1
// Term 2: 4
// Term 3: 13
// Term 4: 40
// Term 5: 121
// Term 6: 364
// Term 7: 1093
// Term 8: 3280
// Term 9: 9841
// Term 10: 29524
