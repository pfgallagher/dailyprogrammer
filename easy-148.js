var combinationLock = function (numDigits, digitOne, digitTwo, digitThree) {
    return numDigits * 3 +
        digitOne +
        ((digitOne - digitTwo + numDigits) % numDigits) +
        ((numDigits + digitThree - digitTwo) % numDigits);
};
console.log(combinationLock(5, 1, 2, 3));
// 21
