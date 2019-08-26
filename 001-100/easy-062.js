var ullmanPuzzle = function (arr, t, k) {
    return arr
        .sort(function (a, b) { return a - b; })
        .slice(0, k)
        .reduce(function (acc, cur) { return acc + cur; }, 0) < t;
};
console.log(ullmanPuzzle([
    8.1,
    55.1,
    91.2,
    74.6,
    73.0,
    85.9,
    73.9,
    81.4,
    87.1,
    49.3,
    88.8,
    5.7,
    26.3,
    7.1,
    58.2,
    31.7,
    5.8,
    76.9,
    16.5,
    8.1,
    48.3,
    6.8,
    92.4,
    83.0,
    19.6,
], 98.2, 3)); // true
