var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var shuffle = function (input) {
    var _a;
    var shuffledInput = __spread(input);
    for (var i = 0; i < input.length; i++) {
        var randomI = Math.floor(Math.random() * i);
        _a = __read([
            shuffledInput[randomI],
            shuffledInput[i],
        ], 2), shuffledInput[i] = _a[0], shuffledInput[randomI] = _a[1];
    }
    return shuffledInput.join("");
};
var bogo = function (input, expectedOutput) {
    var counter = 0;
    var result = input;
    while (result !== expectedOutput) {
        result = shuffle(result);
        counter++;
    }
    return counter + " iterations";
};
console.log(bogo("lolhe", "hello"));
console.log(bogo("helloworld", "worldhello"));
