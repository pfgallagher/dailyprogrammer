var stepCount = function (a, b, steps) {
    var stepArr = [];
    var stepValue = Math.abs(a - b) / (steps - 1);
    for (var i = 0; i < steps; i++) {
        if (a <= b) {
            stepArr.push(a + stepValue * i);
        }
        else {
            stepArr.push(a - stepValue * i);
        }
    }
    return stepArr;
};
console.log(stepCount(18.75, -22.0, 5));
// [18.75, 8.5625, -1.625, -11.8125, -22.0]
console.log(stepCount(-5.75, 12.0, 5));
// [-5.75, -1.3125, 3.125, 7.5625, 12.0]
console.log(stepCount(13.5, -20.75, 3));
// [13.5, -3.625, -20.75]
console.log(stepCount(9.75, 3.0, 9));
// [9.75, 8.90625, 8.0625, 7.21875, 6.375, 5.53125, 4.6875, 3.84375, 3.0]
