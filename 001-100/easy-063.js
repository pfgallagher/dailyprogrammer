var reverse = function (n, arr) {
    var _a;
    for (var min = 0, max = n - 1; min < max; min++, max--) {
        _a = [arr[max], arr[min]], arr[min] = _a[0], arr[max] = _a[1];
    }
    return arr;
};
console.log(reverse(1, [1, 2, 3, 4, 5]));
console.log(reverse(2, [1, 2, 3, 4, 5]));
console.log(reverse(5, [1, 2, 3, 4, 5]));
console.log(reverse(3, [51, 41, 12, 62, 74]));
