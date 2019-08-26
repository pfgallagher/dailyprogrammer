"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var data = JSON.parse(fs_1.readFileSync("./easy-089-data.json", "utf-8")).data;
var mean = function (dataArr) {
    return dataArr.reduce(function (acc, cur) { return acc + cur; }, 0) / dataArr.length;
};
var variance = function (dataArr) {
    return dataArr.reduce(function (acc, cur) { return acc + Math.pow((mean(dataArr) - cur), 2); }, 0) /
        dataArr.length;
};
var standardDeviation = function (dataArr) {
    return Math.sqrt(variance(dataArr));
};
console.log(mean(data));
console.log(variance(data));
console.log(standardDeviation(data));
