"use strict";
exports.__esModule = true;
var util_1 = require("./lib/util");
var drawCircuit = function (hrs) {
    return util_1.chunkArr(util_1.range(0, maxLEDs(hrs) - 1).map(function () { return "-|>|-"; }), 5)
        .map(function (row) { return row.join(""); })
        .join("\n|" + " ".repeat(23) + "|\n");
};
var maxLEDs = function (hrs) {
    var mAhFiveBatteriesSerial = 20;
    var mAhBattery = 1200;
    var numLEDs = Math.floor((mAhBattery / mAhFiveBatteriesSerial / hrs) * 5);
    while (numLEDs % 5) {
        numLEDs--;
    }
    return numLEDs;
};
var calculateResistance = function (hrs) { return (0.5 / 1.2) * hrs; };
var xmasLights = function (hrs) {
    return "Resistor: " + calculateResistance(hrs).toFixed(3) + " Ohms\nScheme:\n" + drawCircuit(hrs);
};
console.log(maxLEDs(1));
// 300
console.log(maxLEDs(4));
// 75
console.log(maxLEDs(8));
// 35
console.log(maxLEDs(12));
// 25
console.log(drawCircuit(20));
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
console.log(drawCircuit(12));
console.log(drawCircuit(6));
console.log(drawCircuit(100));
console.log(calculateResistance(1));
// 0.417
console.log(calculateResistance(4));
// 1.667
console.log(calculateResistance(8));
// 3.333
console.log(xmasLights(20));
// Resistor: 8.333 Ohms
// Scheme:
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
// |                       |
// -|>|--|>|--|>|--|>|--|>|-
