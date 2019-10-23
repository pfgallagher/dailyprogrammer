"use strict";
exports.__esModule = true;
// Effectively the same as #49, with a slight difference:
var montyHall = function (n) {
    var selectedDoor = 0;
    var switchCount = 0;
    var stayCount = 0;
    for (var i = 0; i < n; i++) {
        var carLocation = Math.floor(Math.random() * 3);
        if (carLocation === selectedDoor) {
            stayCount++;
        }
        else {
            switchCount++;
        }
    }
    var totalCount = switchCount + stayCount;
    return "\nTactic 1: " + ((stayCount / totalCount) * 100).toFixed(1) + "% winning chance\nTactic 2: " + ((switchCount / totalCount) * 100).toFixed(1) + "% winning chance\n";
};
console.log(montyHall(1000000));
// Tactic 1: 33.3% winning chance
// Tactic 2: 66.6% winning chance
