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
var fib = function (n) { return (n <= 1 ? n : fib(n - 1) + fib(n - 2)); };
var fibArrUpToN = function (n) {
    var fibArr = [0];
    var i = 1;
    while (fibArr[fibArr.length - 1] < n) {
        fibArr.push(fib(i));
        i++;
    }
    return fibArr.filter(function (num) { return num <= n; });
};
var zeckendorf = function (n, memoArr) {
    if (memoArr === void 0) { memoArr = []; }
    var arr = memoArr;
    var options = fibArrUpToN(n);
    var largest = Math.max.apply(Math, __spread(options));
    var found = options.find(function (el) { return n - el === 0; });
    if (found) {
        arr.push(found);
        return arr;
    }
    arr.push(largest);
    return zeckendorf(n - largest, arr);
};
console.log(zeckendorf(100)); // [89, 8, 3]
console.log(zeckendorf(Math.pow(3, 15))); // [9227465, 3524578, 1346269, 196418, 46368, 6765, 987, 55, 2]
