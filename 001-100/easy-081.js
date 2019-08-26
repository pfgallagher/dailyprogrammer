// I have no idea what this is used for, since I haven't learned calculus yet,
// but here it is:
var numericalDerivative = function (x, f) {
    var derivativeArr = [];
    var step = (x[1] - x[0]) / (f.length - 1);
    for (var i = 0; i < f.length - 1; i++) {
        derivativeArr.push((f[i + 1] - f[i]) / step);
    }
    return derivativeArr;
};
console.log(numericalDerivative([-1, 1], [-1.0, -0.5, 0, 0.5, 1.0]));
