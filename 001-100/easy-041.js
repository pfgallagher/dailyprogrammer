"use strict";
exports.__esModule = true;
var wordWrap = require("word-wrap");
var banner = function (input) {
    var wrapped = wordWrap(input, { width: 76, indent: "", trim: true });
    var wrappedArr = wrapped.split("\n");
    var maxLength = Math.max.apply(Math, wrappedArr.map(function (sentence) { return sentence.length; })) + 4;
    var starStr = "*".repeat(maxLength);
    wrappedArr = [starStr, " "].concat(wrappedArr, [" ", starStr]);
    return wrappedArr
        .map(function (sentence) {
        return "*" + sentence
            .padStart((sentence.length + maxLength) / 2)
            .padEnd(maxLength) + "*";
    })
        .join("\n");
};
console.log(banner("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque. Congue quisque egestas diam in. Ut placerat orci nulla pellentesque. Arcu cursus euismod quis viverra nibh cras. Lacus luctus accumsan tortor posuere ac ut consequat semper. Sed elementum tempus egestas sed sed risus pretium quam. At volutpat diam ut venenatis tellus in. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Justo donec enim diam vulputate ut pharetra sit. Et netus et malesuada fames ac. Ac auctor augue mauris augue neque gravida in fermentum et. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. In vitae turpis massa sed. Arcu dictum varius duis at consectetur. Urna molestie at elementum eu facilisis sed. A lacus vestibulum sed arcu non odio euismod. Commodo elit at imperdiet dui accumsan."));
console.log(banner("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus aenean vel elit scelerisque mauris pellentesque."));
console.log(banner("Hello, World!"));
