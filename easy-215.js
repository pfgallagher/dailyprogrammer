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
var arrFrequency = function (arr) {
    var e_1, _a;
    var result = {};
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var el = arr_1_1.value;
            if (result[el]) {
                result[el]++;
            }
            else {
                result[el] = 1;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1["return"])) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
};
var containsTriplicates = function (arr) {
    return Object.entries(arrFrequency(arr)).some(function (_a) {
        var _b = __read(_a, 2), num = _b[0], count = _b[1];
        return count >= 3;
    });
};
var sadCycles = function (base, start) {
    var arr = [];
    var num = start;
    // This is probably pretty naïve cycle detection, but it gets the job done.
    while (!containsTriplicates(arr)) {
        num = __spread(num.toString()).map(function (el) { return Math.pow(parseInt(el, 10), base); })
            .reduce(function (acc, cur) { return acc + cur; }, 0);
        arr.push(num);
    }
    return __spread(new Set(arr.filter(function (el) { return arr.indexOf(el) !== arr.lastIndexOf(el); })));
};
console.log(sadCycles(5, 117649));
// 10933, 59536, 73318, 50062
console.log(sadCycles(6, 2));
// 383890, 1057187, 513069, 594452, 570947, 786460, 477201, 239459, 1083396, 841700
console.log(sadCycles(7, 7));
// 5345158, 2350099, 9646378, 8282107, 5018104, 2191663
console.log(sadCycles(3, 14));
// 371
console.log(sadCycles(11, 2));
// 5410213163, 416175830, 10983257969, 105122244539, 31487287760, 23479019969, 127868735735, 23572659062, 34181820005, 17233070810, 12544944422, 31450865399, 71817055715, 14668399199, 134844138593, 48622871273, 21501697322, 33770194826, 44292995390, 125581636412, 9417560504, 33827228267, 21497682212, 42315320498, 40028569325, 40435823054, 8700530096, 42360123272, 2344680590, 40391187185, 50591455115, 31629394541, 63182489351, 48977104622, 44296837448, 50918009003, 71401059083, 42001520522, 101858747, 21187545101, 10669113941, 63492084785, 50958448520, 48715803824, 27804526448, 19581408116, 48976748282, 61476706631
