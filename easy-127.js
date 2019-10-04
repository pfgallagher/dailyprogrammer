var mcCarthy91 = function (n) {
    console.log("M(" + n + ")");
    var inner = function (num) {
        if (num > 100) {
            console.log("M(" + (num - 10) + ") since " + num + " is greater than 100");
            return num - 10;
        }
        console.log("M(M(" + (num + 11) + ")) since " + num + " is less than or equal to 100");
        return inner(inner(num + 11));
    };
    return inner(n);
};
console.log(mcCarthy91(99));
