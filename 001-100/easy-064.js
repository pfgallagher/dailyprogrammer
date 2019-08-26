"use strict";
exports.__esModule = true;
var range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (_, idx) { return idx + min; });
};
var gcd = function (a, b) { return (b > 0 ? gcd(b, a % b) : a); };
var sum = function (arr) { return arr.reduce(function (acc, cur) { return acc + cur; }); };
var count = function (arr) { return arr.length; };
var divisors = function (n) { return range(1, n).filter(function (el) { return !(n % el); }); };
var sumDivisors = function (n) { return sum(divisors(n)); };
var countDivisors = function (n) { return count(divisors(n)); };
var totatives = function (n) {
    return range(1, n).filter(function (el) { return gcd(n, el) === 1; });
};
var sumTotatives = function (n) { return sum(totatives(n)); };
var totient = function (n) { return count(totatives(n)); };
console.log(divisors(60));
console.log(sumDivisors(60));
console.log(countDivisors(60));
console.log("\n");
console.log(totatives(30));
console.log(sumTotatives(30));
console.log(totient(30));
