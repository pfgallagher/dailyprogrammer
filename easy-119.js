"use strict";
exports.__esModule = true;
var Coins = function () { return [
    {
        count: 0,
        name: "Quarters",
        value: 0.25
    },
    {
        count: 0,
        name: "Dimes",
        value: 0.1
    },
    {
        count: 0,
        name: "Nickels",
        value: 0.05
    },
    {
        count: 0,
        name: "Pennies",
        value: 0.01
    },
]; };
exports.makeChange = function (amount) {
    var coinArr = Coins();
    var rounded = parseFloat(amount.toFixed(2));
    var change = 0;
    var _loop_1 = function () {
        var amountRemaining = parseFloat((rounded - change).toFixed(2));
        var found = coinArr.find(function (coin) { return coin.value <= amountRemaining; });
        if (found) {
            found.count++;
            change += found.value;
        }
        else {
            return "break";
        }
    };
    while (change < rounded) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    coinArr.forEach(function (coin) {
        if (coin.count) {
            console.log(coin.name + ": " + coin.count);
        }
    });
};
console.log(exports.makeChange(4.17));
// Quarters: 16
// Dimes: 1
// Nickels: 1
// Pennies: 2
console.log(exports.makeChange(1.23));
// Quarters: 4
// Dimes: 2
// Nickels: 0
// Pennies: 3
console.log(exports.makeChange(10.24));
console.log(exports.makeChange(0.99));
console.log(exports.makeChange(5));
console.log(exports.makeChange(0.06));
