var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var rpnCalculator = function () {
    var e_1, _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var stack = [];
    var workingNums = [];
    var pushOp = function () {
        var popOne = stack.pop();
        var popTwo = stack.pop();
        if (popOne && popTwo) {
            workingNums.push(popOne);
            workingNums.push(popTwo);
        }
    };
    try {
        for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var op = args_1_1.value;
            switch (op) {
                case "+":
                    pushOp();
                    stack.push(workingNums[1] + workingNums[0]);
                    workingNums = [];
                    break;
                case "-":
                    pushOp();
                    stack.push(workingNums[1] - workingNums[0]);
                    workingNums = [];
                    break;
                case "*":
                    pushOp();
                    stack.push(workingNums[1] * workingNums[0]);
                    workingNums = [];
                    break;
                case "/":
                    pushOp();
                    stack.push(workingNums[1] / workingNums[0]);
                    workingNums = [];
                    break;
                default:
                    if (typeof op === "number") {
                        stack.push(op);
                    }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (args_1_1 && !args_1_1.done && (_a = args_1["return"])) _a.call(args_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return parseInt(stack.toString(), 10);
};
console.log(rpnCalculator(3, 4, "*", 6, 2, "-", "+"));
