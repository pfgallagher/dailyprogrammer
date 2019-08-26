var sortAndMerge = function (arrOne, arrTwo) {
    var returnedArr = [];
    while (arrOne.length && arrTwo.length) {
        if (arrOne[0] <= arrTwo[0] || (!arrTwo.length && arrOne.length)) {
            returnedArr.push(arrOne.splice(0, 1)[0]);
        }
        if (arrTwo[0] <= arrOne[0] || (!arrOne.length && arrTwo.length)) {
            returnedArr.push(arrTwo.splice(0, 1)[0]);
        }
    }
    return returnedArr;
};
var sortAndMergeTwo = function (arrOne, arrTwo) {
    return arrOne.concat(arrTwo).sort();
};
console.log(sortAndMerge([1, 5, 7, 8], [2, 3, 4, 7, 9]));
console.log(sortAndMerge([2, 3, 4, 7, 9], [1, 5, 7, 8]));
// console.log(sortAndMergeTwo([1, 5, 7, 8], [2, 3, 4, 7, 9]));
// console.log(sortAndMergeTwo([2, 3, 4, 7, 9], [1, 5, 7, 8]));
