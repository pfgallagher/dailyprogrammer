var Locker = /** @class */ (function () {
    function Locker(label) {
        this.label = label;
        this.open = false;
    }
    Locker.count = function (lockerArr) {
        var numberOpen = lockerArr.reduce(function (acc, cur) {
            if (cur.open === true) {
                return acc + 1;
            }
            return acc;
        }, 0);
        var numberClosed = lockerArr.length - numberOpen;
        var pluralOpen = numberOpen === 1 ? "locker is" : "lockers are";
        var pluralClosed = numberClosed === 1 ? "locker is" : "lockers are";
        return numberOpen + " " + pluralOpen + " open and " + numberClosed + " " + pluralClosed + " closed.";
    };
    Locker.whichOpen = function (lockerArr) {
        var lockersOpen = lockerArr
            .filter(function (locker) { return locker.open === true; })
            .map(function (locker) { return locker.label; });
        var pluralOpen = lockersOpen.length === 1 ? "Locker" : "Lockers";
        return pluralOpen + " open: " + lockersOpen.join(", ");
    };
    Locker.prototype.toggle = function () {
        this.open = !this.open;
    };
    return Locker;
}());
var lockers = [];
for (var i = 1; i <= 1000; i++) {
    var newLocker = new Locker(i);
    lockers.push(newLocker);
}
var range = function (min, max) {
    return Array(max - min + 1)
        .fill(0)
        .map(function (el, idx) { return idx + min; });
};
var students = range(1, 1000);
students.forEach(function (student) {
    lockers.forEach(function (locker) {
        if (!(locker.label % student)) {
            locker.toggle();
        }
    });
});
// console.log(Locker.count(lockers));
// console.log(Locker.whichOpen(lockers));
// The above class solution is flexible, yet iterative. If we solely wanted to
// produce an array with booleans for the open status, we could rely on a neat
// trick that takes advantage of the fact that the result of flipping each
// subsequent number results in only the numbers that are squares being flipped.
var lockersAlt = range(1, Math.floor(Math.sqrt(1000))).map(function (locker) { return Math.pow(locker, 2); });
// console.log(lockersAlt);
