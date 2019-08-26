var slidingWindow = function (arr, size, option) {
    var arrs = [];
    while (arr.length) {
        var possibleWindow = arr.slice(0, size);
        if (possibleWindow.length === size) {
            arrs.push(possibleWindow);
        }
        arr.splice(0, 1);
    }
    var result;
    if (option === "min") {
        result = arrs.map(function (el) { return Math.min.apply(Math, el); });
    }
    else if (option === "max") {
        result = arrs.map(function (el) { return Math.max.apply(Math, el); });
    }
    return result;
};
console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3, "max"));
console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3, "min"));
console.log(slidingWindow([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4, "max"));
console.log(slidingWindow([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4, "min"));
