"use strict";
// Since there are so many possible roulette bets, I am just going to do a few of the more common ones.
exports.__esModule = true;
var easy_032_data_1 = require("./easy-032-data");
var randomNum = function () {
    return easy_032_data_1.rouletteNumbers[Math.floor(Math.random() * easy_032_data_1.numbers.length)];
};
var playRoulette = function (betAmount, betType, betOption) {
    var _a = easy_032_data_1.bets[betType], payoutMultiplier = _a.payoutMultiplier, probability = _a.probability;
    var roll = randomNum();
    var win = roll[betType] === betOption;
    return win
        ? "You win! You made a " + betType + " bet on " + betOption + ", and the winning number was " + roll.num + ". You won $" + betAmount *
            payoutMultiplier + ". The odds were " + probability + "."
        : "You lose. You made a " + betType + " bet on " + betOption + ", and the winning number was " + roll.num + ". The odds were " + probability + ".";
};
// console.log(playRoulette(100, "num", "0"));
// console.log(playRoulette(100, "num", "00"));
// console.log(playRoulette(100, "num", "20"));
// console.log(playRoulette(100, "color", "red"));
// console.log(playRoulette(100, "color", "black"));
// console.log(playRoulette(100, "parity", "even"));
// console.log(playRoulette(100, "parity", "odd"));
// console.log(playRoulette(100, "twelve", "first"));
// console.log(playRoulette(100, "twelve", "second"));
// console.log(playRoulette(100, "twelve", "third"));
// console.log(playRoulette(100, "eighteen", "first"));
// console.log(playRoulette(100, "eighteen", "second"));
// console.log(playRoulette(100, "rows", "top"));
// console.log(playRoulette(100, "rows", "middle"));
// console.log(playRoulette(100, "rows", "bottom"));
