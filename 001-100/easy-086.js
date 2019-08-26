var compress = function (str) {
    var compressedArr = [];
    var groupedChars = str.match(/(.)\1{2,}|(.){0,1}/gi);
    if (groupedChars) {
        groupedChars.forEach(function (charGroup) {
            if (charGroup) {
                compressedArr.push("(" + charGroup.length + ", " + charGroup[0] + ")");
            }
        });
    }
    return compressedArr;
};
var decompress = function (compressedArr) {
    return compressedArr
        .map(function (charGroup) { return charGroup.slice(1, -1).split(", "); })
        .map(function (charGroup) { return charGroup[1].repeat(parseInt(charGroup[0], 10)); })
        .join("");
};
var compressedStr = compress("Heeeeelllllooooo nurse!");
console.log(compressedStr);
console.log(decompress(compressedStr));
