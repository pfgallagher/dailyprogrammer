var paritySort = function (arr) {
    var _a;
    var min = 0;
    var max = arr.length - 1;
    while (min < max) {
        while (!(arr[min] % 2) && min < max) {
            min++;
        }
        while (arr[max] % 2 && min < max) {
            max--;
        }
        if (min < max) {
            _a = [arr[max], arr[min]], arr[min] = _a[0], arr[max] = _a[1];
        }
    }
    return arr;
};
console.log(paritySort([1, 3, 3, 4, 5, 6, 7, 8, 9, 10, -2, 8])); // [8, -2, 10, 4, 8, 6, 7, 5, 9, 3, 3, 1];
