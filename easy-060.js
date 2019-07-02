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
var isOdd = function (num) { return !!(num % 2); };
var isPrime = function (num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (!(num % i)) {
            return false;
        }
    }
    return true;
};
var primeFactorialize = function (num) {
    var factors = [];
    for (var i = 2; i <= num; i++) {
        while (isPrime(i) && !(num % i)) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
};
var findPoliteness = function (num) {
    var factors = primeFactorialize(num);
    return (__spread(new Set(factors)).reduce(function (acc, cur) {
        return (acc *=
            factors.filter(function (factor) { return factor === cur && isOdd(factor); }).length + 1);
    }, 1) - 1);
};
console.log(findPoliteness(15)); // 3
console.log(findPoliteness(9)); // 2
console.log(findPoliteness(90)); // 5
