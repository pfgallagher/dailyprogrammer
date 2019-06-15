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
    return "\nStay: " + stayCount + "\nSwitch: " + switchCount + "\n";
};
console.log(montyHall(10000000));
