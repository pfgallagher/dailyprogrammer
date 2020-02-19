var findGarlandDegree = function (word) {
    var degree = 0;
    for (var i = 1; i < word.length; i++) {
        var left = word.slice(0, i);
        var right = word.slice(-i);
        if (left === right && left.length > degree) {
            degree = left.length;
        }
    }
    return degree;
};
console.log(findGarlandDegree("programmer"));
// 0
console.log(findGarlandDegree("ceramic"));
// 1
console.log(findGarlandDegree("onion"));
// 2
console.log(findGarlandDegree("alfalfa"));
// 4
