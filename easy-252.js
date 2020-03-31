var getShare = function (numSailors, numCoconuts) {
    return Math.floor(numCoconuts / numSailors);
};
var testSplit = function (numSailors, numCoconuts) {
    for (var i = 0; i < numSailors; i++) {
        var share = getShare(numSailors, numCoconuts);
        if (numCoconuts % share !== 1) {
            return false;
        }
        numCoconuts -= share + 1;
    }
    return !(numCoconuts % getShare(numSailors, numCoconuts));
};
var coconuts = function (numSailors) {
    var numCoconuts = 2;
    while (!testSplit(numSailors, numCoconuts)) {
        numCoconuts++;
    }
    return numCoconuts;
};
console.log(coconuts(5));
// 3121
