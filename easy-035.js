var calcTriangleNumVal = function (num) { return (num * (num + 1)) / 2; };
var findClosestTriangleNum = function (num) {
    var triangleNum = 0;
    for (var i = 0; calcTriangleNumVal(i) <= num; i++) {
        triangleNum = i;
    }
    return triangleNum;
};
var printTriangle = function (num) {
    var closestTriangleNum = findClosestTriangleNum(num);
    var closestTriangleNumVal = calcTriangleNumVal(closestTriangleNum);
    for (var i = closestTriangleNum; i > 0; i--) {
        var rowArr = [];
        while (rowArr.length < i) {
            rowArr.unshift(closestTriangleNumVal);
            closestTriangleNumVal--;
        }
        console.log(rowArr.join(" "));
    }
};
printTriangle(10);
// printTriangle(6);
// printTriangle(3);
// printTriangle(12);
