var diceAnalysis = function () {
    console.log("# of Rolls\t1s\t2s\t3s\t4s\t5s\t6s");
    console.log("==============================================================");
    var _loop_1 = function (i) {
        var rollArr = [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
        ];
        for (var j = 0; j < i; j++) {
            var possibleRolls = [0, 1, 2, 3, 4, 5];
            var randomRoll = Math.floor(Math.random() * possibleRolls.length);
            var roll = rollArr[randomRoll];
            roll[1]++;
        }
        var total = rollArr.reduce(function (acc, cur) { return acc + cur[1]; }, 0);
        var percentages = rollArr.map(function (roll) { return ((roll[1] / total) * 100).toFixed(2) + "%"; });
        console.log(i + "\t\t" + percentages.join("\t"));
    };
    for (var i = 10; i <= 1000000; i *= 10) {
        _loop_1(i);
    }
};
diceAnalysis();
