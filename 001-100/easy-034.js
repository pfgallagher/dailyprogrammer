var sumTwoLargestNums = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var _a = nums.sort(function (a, b) { return b - a; }), largest = _a[0], nextLargest = _a[1];
    return Math.pow(largest, 2) + Math.pow(nextLargest, 2);
};
console.log(sumTwoLargestNums(3, 2, 1)); // -> 9 + 4 -> 13
console.log(sumTwoLargestNums(1, 2, 3)); // -> 9 + 4 -> 13
console.log(sumTwoLargestNums(5, 5, 5)); // -> 25 + 25 -> 50
console.log(sumTwoLargestNums(-3, -2, -1)); // -> 4 + 1 -> 5
console.log(sumTwoLargestNums(-4, 2, 3)); // -> 9 + 4 -> 13
// Works with more than 3 parameters, as well:
console.log(sumTwoLargestNums(5, 3, 4, 2, 1)); // -> 25 + 16 -> 41
