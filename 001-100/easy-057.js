var maxSumSeries = function (arr) {
    var max = 0;
    var intermediateMax = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        intermediateMax += el;
        if (intermediateMax < 0) {
            intermediateMax = 0;
        }
        if (max < intermediateMax) {
            max = intermediateMax;
        }
    }
    return max;
};
console.log(maxSumSeries([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
