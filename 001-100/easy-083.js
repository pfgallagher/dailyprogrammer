// I feel like this code is super WET, but nonetheless, it's working
// more-or-less correctly.
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
var numbers = [
    {
        long: "trillion",
        short: "quintillion",
        value: 1000000000000000000
    },
    {
        long: "billiard",
        short: "quadrillion",
        value: 1000000000000000
    },
    {
        long: "billion",
        short: "trillion",
        value: 1000000000000
    },
    {
        long: "milliard",
        short: "billion",
        value: 1000000000
    },
    {
        long: "million",
        short: "million",
        value: 1000000
    },
    {
        long: "thousand",
        short: "thousand",
        value: 1000
    },
    {
        long: "hundred",
        short: "hundred",
        value: 100
    },
    {
        long: "ninety",
        short: "ninety",
        value: 90
    },
    {
        long: "eighty",
        short: "eighty",
        value: 80
    },
    {
        long: "seventy",
        short: "seventy",
        value: 70
    },
    {
        long: "sixty",
        short: "sixty",
        value: 60
    },
    {
        long: "fifty",
        short: "fifty",
        value: 50
    },
    {
        long: "forty",
        short: "forty",
        value: 40
    },
    {
        long: "thirty",
        short: "thirty",
        value: 30
    },
    {
        long: "twenty",
        short: "twenty",
        value: 20
    },
    {
        long: "nineteen",
        short: "nineteen",
        value: 19
    },
    {
        long: "eighteen",
        short: "eighteen",
        value: 18
    },
    {
        long: "seventeen",
        short: "seventeen",
        value: 17
    },
    {
        long: "sixteen",
        short: "sixteen",
        value: 16
    },
    {
        long: "fifteen",
        short: "fifteen",
        value: 15
    },
    {
        long: "fourteen",
        short: "fourteen",
        value: 14
    },
    {
        long: "thirteen",
        short: "thirteen",
        value: 13
    },
    {
        long: "twelve",
        short: "twelve",
        value: 12
    },
    {
        long: "eleven",
        short: "eleven",
        value: 11
    },
    {
        long: "ten",
        short: "ten",
        value: 10
    },
    {
        long: "nine",
        short: "nine",
        value: 9
    },
    {
        long: "eight",
        short: "eight",
        value: 8
    },
    {
        long: "seven",
        short: "seven",
        value: 7
    },
    {
        long: "six",
        short: "six",
        value: 6
    },
    {
        long: "five",
        short: "five",
        value: 5
    },
    {
        long: "four",
        short: "four",
        value: 4
    },
    {
        long: "three",
        short: "three",
        value: 3
    },
    {
        long: "two",
        short: "two",
        value: 2
    },
    {
        long: "one",
        short: "one",
        value: 1
    },
];
var findNum = function (n) {
    var found = numbers.find(function (num) { return n - num.value >= 0; });
    if (found) {
        return found;
    }
};
var findWord = function (n, form) {
    var found = numbers.find(function (num) { return num.value === n; });
    if (found) {
        var word = found[form];
        if (typeof word === "string") {
            return word;
        }
    }
};
var numLoop = function (n, min) {
    var numMap = new Map();
    while (n > min) {
        var found = findNum(n);
        if (found) {
            if (numMap.has(found.value)) {
                numMap.set(found.value, numMap.get(found.value) + 1);
            }
            else {
                numMap.set(found.value, 1);
            }
            n -= found.value;
        }
    }
    return __spread(numMap);
};
var lessThan100 = function (n, form) {
    return numLoop(n, 0)
        .map(function (num) { return findWord(num[0], form); })
        .join("-");
};
var greaterThan100 = function (n, form) {
    return numLoop(n, 100)
        .map(function (num) {
        return (num[1] < 100 ? lessThan100(num[1], form) : num[1]) + " " + findWord(num[0], form);
    })
        .join(", ");
};
var combine = function (n, form) {
    var greater = greaterThan100(n, form);
    var lesser = lessThan100(n % 100, form);
    var result = greater + " " + (lesser ? "" + lesser : "");
    return result.replace(/(\d+)/g, function (match) { return combine(parseInt(match, 10), form); });
};
var numToWords = function (n) {
    var short = combine(n, "short");
    var long = combine(n, "long");
    return "\nshort: " + short + "\n\nlong: " + long + "\n";
};
console.log(numToWords(1234567891111));
