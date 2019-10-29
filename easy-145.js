var treeGenerator = function (n, trunkChar, leavesChar) {
    for (var i = 1, spaceCounter = Math.ceil(n / 2); i <= n; i += 2, spaceCounter--) {
        console.log(" ".repeat(spaceCounter) + leavesChar.repeat(i));
    }
    console.log(" ".repeat(Math.floor(n / 2)) + trunkChar.repeat(3));
};
treeGenerator(3, "#", "*");
//    *
//   ***
//   ###
treeGenerator(13, "=", "+");
//       +
//      +++
//     +++++
//    +++++++
//   +++++++++
//  +++++++++++
// +++++++++++++
//      ===
