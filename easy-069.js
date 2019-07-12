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
    var titleDifference = (longestColumnLength - title.length) / 2;
    var formattedTitle = "| " + " ".repeat(titleDifference) + title + " ".repeat(titleDifference) + " |";
    var formattedInputs = inputs
        .map(function (input) { return "| " + input.padEnd(longestColumnLength, " ") + " |"; })
        .reduce(function (acc, cur) { return acc + "\n" + cur; });
    var divider = "+" + "-".repeat(longestColumnLength + 2) + "+";
    return divider + "\n" + formattedTitle + "\n" + divider + "\n" + formattedInputs + "\n" + divider;
};
console.log(createColumn("Necessities", [
    "fairy",
    "cakes",
    "happy",
    "fish",
    "disgustipated",
    "melon-balls",
]));
