var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var radiansToDegrees = function (n) { return n / (Math.PI / 180); };
var degreesToRadians = function (n) { return n * (Math.PI / 180); };
var pythagoreanTheorem = function (target, a, b, c) {
    switch (target) {
        case "a":
            if (c && b) {
                return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
            }
        case "b":
            if (c && a) {
                return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
            }
        case "c":
            if (a && b) {
                return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            }
    }
};
var SOH = function (target, S, O, H) {
    switch (target) {
        case "S":
            if (O && H) {
                return radiansToDegrees(Math.asin(O / H));
            }
        case "O":
            if (S && H) {
                return Math.sin(degreesToRadians(S)) * H;
            }
        case "H":
            if (S && O) {
                return O / Math.sin(degreesToRadians(S));
            }
    }
};
var CAH = function (target, C, A, H) {
    switch (target) {
        case "C":
            if (A && H) {
                return radiansToDegrees(Math.acos(A / H));
            }
        case "A":
            if (C && H) {
                return Math.cos(degreesToRadians(C)) * H;
            }
        case "H":
            if (C && A) {
                return A / Math.cos(degreesToRadians(C));
            }
    }
};
var TOA = function (target, T, O, A) {
    switch (target) {
        case "T":
            if (O && A) {
                return radiansToDegrees(Math.atan(O / A));
            }
        case "O":
            if (T && A) {
                return Math.tan(degreesToRadians(T)) * A;
            }
        case "A":
            if (T && O) {
                return O / Math.tan(degreesToRadians(T));
            }
    }
};
var rightTriangleSolver = function (input) {
    var triangle = __assign({ A: undefined, B: undefined, C: 90, a: undefined, b: undefined, c: undefined }, Object.fromEntries(input.split("\n").map(function (variable) { return variable.split("="); }).map(function (_a) {
        var _b = __read(_a, 2), variable = _b[0], value = _b[1];
        return [variable, parseFloat(value)];
    })));
    var unknowns = Object.keys(triangle).filter(function (variable) { return !triangle[variable]; });
    while (unknowns.length) {
        var firstUnknown = unknowns.shift();
        var firstUnknownValue = void 0;
        switch (firstUnknown) {
            case "a":
                if (triangle.b && triangle.c) {
                    firstUnknownValue = pythagoreanTheorem("a", undefined, triangle.b, triangle.c);
                }
                else if (triangle.B && triangle.b) {
                    firstUnknownValue = TOA("A", triangle.B, triangle.b, undefined);
                }
                break;
            case "b":
                if (triangle.a && triangle.c) {
                    firstUnknownValue = pythagoreanTheorem("b", triangle.a, undefined, triangle.c);
                }
                else if (triangle.A && triangle.c) {
                    firstUnknownValue = CAH("A", triangle.A, undefined, triangle.c);
                }
                else if (triangle.B && triangle.c) {
                    firstUnknownValue = SOH("O", triangle.B, undefined, triangle.c);
                }
                else if (triangle.B && triangle.a) {
                    firstUnknownValue = TOA("O", triangle.B, undefined, triangle.a);
                }
                break;
            case "c":
                if (triangle.a && triangle.b) {
                    firstUnknownValue = pythagoreanTheorem("c", triangle.a, triangle.b, undefined);
                }
                else if (triangle.B && triangle.b) {
                    firstUnknownValue = SOH("H", triangle.B, triangle.b, undefined);
                }
                else if (triangle.A && triangle.b) {
                    firstUnknownValue = CAH("H", triangle.A, triangle.b, undefined);
                }
                break;
            case "A":
                if (triangle.b && triangle.c) {
                    firstUnknownValue = CAH("C", undefined, triangle.b, triangle.c);
                }
                break;
            case "B":
                if (triangle.b && triangle.c) {
                    firstUnknownValue = SOH("S", undefined, triangle.b, triangle.c);
                }
                else if (triangle.b && triangle.a) {
                    firstUnknownValue = TOA("T", undefined, triangle.b, triangle.a);
                }
                break;
        }
        if (firstUnknown) {
            if (firstUnknownValue) {
                triangle[firstUnknown] = firstUnknownValue;
            }
            else {
                unknowns.push(firstUnknown);
            }
        }
    }
    return triangle;
};
// console.log(rightTriangleSolver("a=3\nb=4\nC=90"));
// console.log(rightTriangleSolver("a=3\nb=4\nA=36.87"));
// console.log(rightTriangleSolver("a=3\nb=4\nB=53.13"));
// console.log(rightTriangleSolver("a=3\nb=4"));
// console.log(rightTriangleSolver("b=4\nc=5"));
// console.log(rightTriangleSolver("b=4\nc=5\nA=36.87"));
// console.log(rightTriangleSolver("b=4\nc=5\nB=53.13"));
// console.log(rightTriangleSolver("b=4\nc=5\nC=90"));
// console.log(rightTriangleSolver("a=3\nA=36.87\nB=53.13"));
// console.log(rightTriangleSolver("a=3\nb=4\nc=5"));
// Expected output for all above test cases:
// --- 
// A=36.87
// B=53.13
// C=90
// a=3
// b=4
// c=5
