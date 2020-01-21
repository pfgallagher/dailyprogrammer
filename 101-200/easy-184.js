var SmartStackList = /** @class */ (function () {
    function SmartStackList() {
        this.stack = [];
        this.ordered = [];
    }
    SmartStackList.prototype.push = function (n) {
        this.stack.push(n);
        this.ordered.push(n);
        this.ordered = this.ordered.sort(function (a, b) { return a - b; });
    };
    SmartStackList.prototype.pop = function () {
        var popped = this.stack.pop();
        if (popped) {
            this.ordered.splice(this.ordered.lastIndexOf(popped), 1);
        }
    };
    SmartStackList.prototype.size = function () {
        return this.stack.length;
    };
    SmartStackList.prototype.removeGreater = function (n) {
        this.stack = this.stack.filter(function (el) { return el > n; });
        this.ordered = this.stack.filter(function (el) { return el > n; });
    };
    SmartStackList.prototype.display = function (type) {
        return type === "stack" ? this.stack : this.ordered;
    };
    return SmartStackList;
}());
var randomPositiveOrNegativeN = function (maxAndMinus) {
    var negative = !!Math.round(Math.random());
    var randomNum = Math.floor(Math.random() * maxAndMinus);
    if (negative) {
        randomNum *= -1;
    }
    return randomNum;
};
var runTests = function () {
    var mySmartStackList = new SmartStackList();
    var randomN = Math.floor(Math.random() * 40);
    for (var i = 0; i < randomN; i++) {
        var randomNum = randomPositiveOrNegativeN(1000);
        mySmartStackList.push(randomNum);
    }
    console.log(mySmartStackList.display("stack"));
    console.log(mySmartStackList.display("ordered"));
    var randomFilter = randomPositiveOrNegativeN(1000);
    mySmartStackList.removeGreater(randomFilter);
    console.log(mySmartStackList.display("stack"));
    console.log(mySmartStackList.display("ordered"));
    for (var i = 0; i < Math.round(mySmartStackList.size() / 2); i++) {
        mySmartStackList.pop();
    }
    console.log(mySmartStackList.display("stack"));
    console.log(mySmartStackList.display("ordered"));
};
runTests();
