"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) { return o; }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i.return)) { m.call(i); }
        }
        finally { if (e) { throw e.error; } }
    }
    return ar;
};
exports.__esModule = true;
var util_1 = require("../lib/util");
var priceArrToPriceObj = function (arr) {
    return Object.fromEntries(arr.map(function (nameAndPrice) { return nameAndPrice.split(" "); }));
};
var findPriceDifferences = function (input) {
    var _a = __read(input.split("\n")), itemCount = _a[0], items = _a.slice(1);
    var _b = __read(util_1.chunkArr(items, parseInt(itemCount, 10)), 2), oldPrices = _b[0], newPrices = _b[1];
    var oldPricesObj = priceArrToPriceObj(oldPrices);
    var newPricesObj = priceArrToPriceObj(newPrices);
    var changedPrices = {};
    Object.keys(oldPricesObj).forEach(function (key) {
        if (oldPricesObj[key] !== newPricesObj[key]) {
            var priceChange = parseInt(newPricesObj[key], 10) - parseInt(oldPricesObj[key], 10);
            priceChange = priceChange > 0 ? "+" + priceChange : priceChange;
            changedPrices[key] = priceChange;
        }
    });
    Object.entries(changedPrices).forEach(function (changedPrice) {
        console.log(changedPrice.join(" "));
    });
};
console.log(findPriceDifferences("4\nCarriageBolt 45\nEyebolt 50\nWasher 120\nRivet 10\nCarriageBolt 45\nEyebolt 45\nWasher 140\nRivet 10"));
// Eyebolt -5
// Washer +20
console.log(findPriceDifferences("3\n2DNail 3\n4DNail 5\n8DNail 10\n8DNail 11\n4DNail 5\n2DNail 2"));
// 2DNail -1
// 8DNail +1
