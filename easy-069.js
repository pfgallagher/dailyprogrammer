// Not gonna lie, this is pretty hacky.
// It would definitely benefit from some refactoring, but I try to timebox these
// challenges pretty tightly.
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
var createColumn = function (title, inputs) {
    var longestColumnLength = Math.max.apply(Math, __spread(inputs.map(function (input) { return input.length; }), [title.length]));
    var titleDifference = Math.floor((longestColumnLength - title.length) / 2);
    var parityOffset = titleDifference % 2 ? 1 : 2;
    var formattedTitle = "|" + " ".repeat(titleDifference) + title + " " + " ".repeat(titleDifference + parityOffset) + "|";
    var formattedInputs = inputs
        .map(function (input) { return "| " + input.padEnd(longestColumnLength, " ") + " |"; })
        .reduce(function (acc, cur) { return acc + "\n" + cur; });
    var divider = "+" + "-".repeat(longestColumnLength + 2) + "+";
    return divider + "\n" + formattedTitle + "\n" + divider + "\n" + formattedInputs + "\n" + divider;
};
var createTable = function (titles, inputs) {
    if (typeof titles === "string") {
        return createColumn(titles, inputs);
    }
    var columns = [];
    titles.forEach(function (title, i) {
        columns.push(createColumn(title, inputs[i]).split("\n"));
    });
    var arr = Array(columns[0].length).fill([]);
    for (var i = 0; i < columns.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i > 0) {
                arr[j] = arr[j].concat(columns[i][j].slice(1));
            }
            else {
                arr[j] = arr[j].concat(columns[i][j]);
            }
        }
    }
    return arr.map(function (el) { return el.flat().join(""); }).join("\n");
};
console.log(createTable("Necessities", [
    "fairy",
    "cakes",
    "happy",
    "fish",
    "disgustipated",
    "melon-balls",
]));
console.log(createTable(["Name", "Address", "Description"], [
    ["Reddit", "Wikipedia", "xkcd"],
    ["www.reddit.com", "en.wikipedia.net", "xkcd.com"],
    [
        "The frontpage of the internet",
        "The Free Encyclopedia",
        "Sudo make me a sandwich.",
    ],
]));
