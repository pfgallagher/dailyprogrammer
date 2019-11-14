// A triangle on a flat plane is described by its angles and side lengths, and you don't need to be given all of the angles and side lengths to work out the rest. In this challenge, you'll be working with right-angled triangles only.
// Here's a representation of how this challenge will describe a triangle (link). Each side-length is a lower-case letter, and the angle opposite each side is an upper-case letter. For the purposes of this challenge, the angle C will always be the right-angle. Your challenge is, using basic trigonometry and given an appropriate number of values for the angles or side lengths, to find the rest of the values.
// Input Description
// On the console, you will be given a number N. You will then be given N lines, expressing some details of a triangle in the format below, where all angles are in degrees; the input data will always give enough information and will describe a valid triangle. Note that, depending on your language of choice, a conversion from degrees to radians may be needed to use trigonometric functions such as sin, cos and tan.
// Sample Output
// Tips & Notes
// There are 4 useful trigonometric identities you may find very useful.
//     Pythagoreas' Theorem, where h is the side length opposite the right-angle and r and s are any 2 other sides.
//     3 Trigonometric Ratios
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
// console.log(SOH("O", 39, undefined, 30))
// console.log(SOH("S", undefined, 18.87961173149512, 30))
// console.log(SOH("H", 39, 18.87961173149512, undefined))
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
// console.log(CAH("C", undefined, 3, 5))
// console.log(CAH("A", 53.13010235415598, undefined, 5));
// console.log(CAH("H", 53.13010235415598, 3, undefined))
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
console.log(TOA("T", undefined, 3, 4));
console.log(TOA("O", 36.86989764584402, undefined, 4));
console.log(TOA("A", 36.86989764584402, 3, undefined));
var rightTriangleSolver = function (input) {
    var triangle = __assign({ A: undefined, B: undefined, C: undefined, a: undefined, b: undefined, c: undefined }, Object.fromEntries(input.split("\n").map(function (variable) { return variable.split("="); }).map(function (_a) {
        var _b = __read(_a, 2), variable = _b[0], value = _b[1];
        return [variable, parseFloat(value)];
    })));
    var unknowns = Object.keys(triangle).filter(function (variable) { return !triangle[variable]; });
    while (unknowns.length) {
        var firstUnknown = unknowns.shift();
        var firstUnknownValue = void 0;
        // TODO: Start adding cases using trig. 
        switch (firstUnknown) {
            case "a": // opposite
                if (triangle.b && triangle.c) {
                    firstUnknownValue = pythagoreanTheorem("a", undefined, triangle.b, triangle.c);
                }
                else if (triangle.A && triangle.c) {
                    // firstUnknownValue = 
                }
                break;
            case "b": // adjacent
                if (triangle.a && triangle.c) {
                    firstUnknownValue = pythagoreanTheorem("b", triangle.a, undefined, triangle.c);
                }
            case "c": // hypo
                if (triangle.a && triangle.b) {
                    firstUnknownValue = pythagoreanTheorem("c", triangle.a, triangle.b, undefined);
                }
            case "A":
            case "B":
            case "C":
        }
        if (firstUnknown) {
            if (firstUnknownValue) {
                triangle[firstUnknown] = firstUnknownValue;
            }
            else {
                unknowns.push(firstUnknown);
            }
        }
        console.log(unknowns);
        break;
    }
    return '';
};
console.log(rightTriangleSolver("a=3\nb=4\nC=90"));
// a=3
// b=4
// c=5
// A=36.87
// B=53.13
// C=90
