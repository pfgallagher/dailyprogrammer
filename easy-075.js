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
var mathExpressionToC = function (expression) {
    var _a = __read(expression.split("="), 2), leftHand = _a[0], rightHand = _a[1];
    var _b = __read(leftHand.split("("), 2), funcName = _b[0], args = _b[1];
    var argsArr = args.split(",").map(function (el) { return "float " + el.replace(")", ""); });
    var formattedLeftHand = "float " + funcName + "(" + argsArr.join(", ") + ")";
    var formattedRightHand = "return " + rightHand
        .replace(/(exp|log|sqrt|abs|sin|cos|tan)/g, "$&f")
        .replace(/absf/g, "fabsf");
    return formattedLeftHand + "\n{\n\t" + formattedRightHand + "\n}";
};
console.log(mathExpressionToC("big(x,y)=2.0*x + cos(y)"));
console.log(mathExpressionToC("L0(x,y)=abs(x)+abs(y)"));
console.log(mathExpressionToC("f(x)=x*x"));
console.log(mathExpressionToC("big(x,y)=sqrt(x+y)*10"));
console.log(mathExpressionToC("big(x,y)=sqrt(x+y)+abs(10)"));
