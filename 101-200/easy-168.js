"use strict";
exports.__esModule = true;
var faker = require("faker");
var util_1 = require("../lib/util");
var randomScore = function () { return Math.round(Math.random() * 100); };
var generateStudentRecords = function (n) {
    return util_1.range(0, n)
        .map(function () {
        return faker.name.firstName() + " " + faker.name.lastName() + "\t\t" + util_1.range(0, 5)
            .map(function () { return randomScore(); })
            .join("\t");
    })
        .join("\n");
};
console.log(generateStudentRecords(10));
