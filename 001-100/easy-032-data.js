"use strict";
exports.__esModule = true;
var Colors;
(function (Colors) {
    Colors["red"] = "red";
    Colors["black"] = "black";
    Colors["green"] = "green";
})(Colors || (Colors = {}));
var redNums = [
    "1",
    "3",
    "5",
    "7",
    "9",
    "12",
    "14",
    "16",
    "18",
    "19",
    "21",
    "23",
    "25",
    "27",
    "30",
    "32",
    "34",
    "36",
];
var Parity;
(function (Parity) {
    Parity["none"] = "none";
    Parity["even"] = "even";
    Parity["odd"] = "odd";
})(Parity || (Parity = {}));
var Twelve;
(function (Twelve) {
    Twelve["none"] = "none";
    Twelve["first"] = "first";
    Twelve["second"] = "second";
    Twelve["third"] = "third";
})(Twelve || (Twelve = {}));
var Eighteen;
(function (Eighteen) {
    Eighteen["none"] = "none";
    Eighteen["first"] = "first";
    Eighteen["second"] = "second";
})(Eighteen || (Eighteen = {}));
var Rows;
(function (Rows) {
    Rows["none"] = "none";
    Rows["top"] = "top";
    Rows["middle"] = "middle";
    Rows["bottom"] = "bottom";
})(Rows || (Rows = {}));
var RouletteNumber = /** @class */ (function () {
    function RouletteNumber(num, color, parity, twelve, eighteen, rows) {
        this.num = num;
        this.color = color;
        this.parity = parity;
        this.twelve = twelve;
        this.eighteen = eighteen;
        this.rows = rows;
    }
    return RouletteNumber;
}());
exports.RouletteNumber = RouletteNumber;
var range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (el, idx) { return idx + min; });
};
var isZero = function (num) { return num === "0" || num === "00"; };
var findParity = function (num) {
    if (isZero(num)) {
        return Parity.none;
    }
    return !(parseInt(num, 10) % 2) ? Parity.even : Parity.odd;
};
var findTwelve = function (num) {
    if (isZero(num)) {
        return Twelve.none;
    }
    if (parseInt(num, 10) <= 12) {
        return Twelve.first;
    }
    if (parseInt(num, 10) <= 24) {
        return Twelve.second;
    }
    return Twelve.third;
};
var findEighteen = function (num) {
    if (isZero(num)) {
        return Eighteen.none;
    }
    if (parseInt(num, 10) <= 18) {
        return Eighteen.first;
    }
    return Eighteen.second;
};
var findColor = function (num) {
    if (isZero(num)) {
        return Colors.green;
    }
    if (redNums.includes(num)) {
        return Colors.red;
    }
    return Colors.black;
};
var findRow = function (num) {
    if (isZero(num)) {
        return Rows.none;
    }
    switch (parseInt(num, 10) % 3) {
        case 0:
            return Rows.top;
        case 2:
            return Rows.middle;
        default:
            return Rows.bottom;
    }
};
var numbers = ["00"].concat(range(0, 36).map(function (el) { return el.toString(); }));
exports.numbers = numbers;
var rouletteNumbers = [];
exports.rouletteNumbers = rouletteNumbers;
numbers.forEach(function (el) {
    var num = el;
    var color = findColor(el);
    var parity = findParity(el);
    var twelve = findTwelve(el);
    var eighteen = findEighteen(el);
    var rows = findRow(el);
    var newNum = new RouletteNumber(num, color, parity, twelve, eighteen, rows);
    rouletteNumbers.push(newNum);
});
var bets = {
    color: {
        payoutMultiplier: 1,
        probability: "1 1/9 to 1"
    },
    eighteen: {
        payoutMultiplier: 1,
        probability: "1 1/9 to 1"
    },
    num: {
        payoutMultiplier: 35,
        probability: "37 to 1"
    },
    parity: {
        payoutMultiplier: 1,
        probability: "1 1/9 to 1"
    },
    rows: {
        payoutMultiplier: 2,
        probability: "2 1/6 to 1"
    },
    twelve: {
        payoutMultiplier: 2,
        probability: "2 1/6 to 1"
    }
};
exports.bets = bets;
