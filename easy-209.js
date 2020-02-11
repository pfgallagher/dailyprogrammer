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
var determineFlair = function (input) {
    var lastReset = 0;
    return input
        .split("\n")
        .map(function (usernameWithTime) { return usernameWithTime.split(": "); })
        .map(function (_a) {
        var _b = __read(_a, 2), username = _b[0], time = _b[1];
        return [username, parseFloat(time)];
    })
        .sort(function (a, b) { return (a[1] < b[1] ? -1 : 1); })
        .map(function (_a) {
        var _b = __read(_a, 2), username = _b[0], time = _b[1];
        var flairTime = Math.floor(60 - (time - lastReset));
        lastReset = time;
        return [username, flairTime];
    })
        .map(function (userWithTime) { return userWithTime.join(": "); })
        .join("\n");
};
console.log(determineFlair("UserA: 41.04\nUserB: 7.06\nUserC: 20.63\nUserD: 54.28\nUserE: 12.59\nUserF: 31.17\nUserG: 63.04"));
// UserB: 52
// UserE: 54
// UserC: 51
// UserF: 49
// UserA: 50
// UserD: 46
// UserG: 51
console.log(determineFlair("Coder_d00d: 3.14\nCosmologicon: 22.15\nElite6809: 17.25\njnazario: 33.81\nnint22: 10.13\nrya11111: 36.29\nprofessorlamp: 31.60\nXenophonOfAthens: 28.74"));
// Coder_d00d: 56
// nint22: 53
// Elite6809: 52
// Cosmologicon: 55
// XenophonOfAthens: 53
// professorlamp: 57
// jnazario: 57
// rya11111: 57
console.log(determineFlair("bholzer: 101.09\nCosmologicon: 27.45\nnint22: 13.76\nnooodl: 7.29\nnottoobadguy: 74.56\noskar_s: 39.90\nSteve132: 61.82"));
// nooodl: 52
// nint22: 53
// Cosmologicon: 46
// oskar_s: 47
// Steve132: 38
// nottoobadguy: 47
// bholzer: 33