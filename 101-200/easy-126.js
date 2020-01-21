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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var merge = function (leftArr, rightArr) {
    var leftCounter = 0;
    var rightCounter = 0;
    var resultArr = [];
    while (leftCounter < leftArr.length && rightCounter < rightArr.length) {
        var left = leftArr[leftCounter];
        var right = rightArr[rightCounter];
        if (left < right) {
            resultArr.push(left);
            leftCounter++;
        }
        else {
            resultArr.push(right);
            rightCounter++;
        }
    }
    return __spread(resultArr, leftArr.slice(leftCounter), rightArr.slice(rightCounter));
};
var splitArr = function (arr, splitAt) { return [
    arr.slice(0, splitAt),
    arr.slice(splitAt),
]; };
var mergeSort = function (arr) {
    var _a = __read(splitArr(arr, Math.floor(arr.length / 2)), 2), leftHalf = _a[0], rightHalf = _a[1];
    return arr.length <= 1
        ? arr
        : merge(mergeSort(leftHalf), mergeSort(rightHalf));
};
var main = function (arrOne, arrTwo) {
    var mergedArr = __spread(arrOne, arrTwo.filter(function (el) { return el; }));
    return mergeSort(mergedArr);
};
console.log(main([692, 1, 32], [0, 0, 0, 14, 15, 123, 2431]));
