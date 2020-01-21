var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var partition = function (arr, low, high) {
    var _a;
    var pivot = Math.floor((low + high) / 2);
    while (low < high) {
        while (arr[low] < arr[pivot]) {
            low++;
        }
        while (arr[high] > arr[pivot]) {
            high--;
        }
        if (low <= high) {
            _a = __read([arr[high], arr[low]], 2), arr[low] = _a[0], arr[high] = _a[1];
            low++;
            high--;
        }
    }
    return low;
};
var quicksort = function (arr, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    var pivot = partition(arr, low, high);
    if (low < high) {
        quicksort(arr, low, pivot - 1);
        quicksort(arr, pivot, high);
    }
    return arr;
};
console.log(quicksort([1, 2, 3, 4, 5]));
console.log(quicksort([5, 4, 3, 2, 1]));
