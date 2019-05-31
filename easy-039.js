var fizzbuzz = function (n) {
    return Array(n)
        .fill(0)
        .map(function (el, idx) { return idx + 1; })
        .forEach(function (el) {
        console.log("" + (el % 3 ? "" : "Fizz") + (el % 5 ? "" : "Buzz") || el);
    });
};
fizzbuzz(100);
