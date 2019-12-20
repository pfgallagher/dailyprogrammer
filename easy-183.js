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
var compareNumStrings = function (a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
};
var splitSemVer = function (semVerString) {
    return semVerString.split(/[\./+-]/);
};
var sortSemVer = function (versionArr) {
    return versionArr.sort(function (a, b) {
        var e_1, _a;
        var _b = __read(splitSemVer(a), 4), majorA = _b[0], minorA = _b[1], patchA = _b[2], _c = _b[3], labelA = _c === void 0 ? "" : _c;
        var _d = __read(splitSemVer(b), 4), majorB = _d[0], minorB = _d[1], patchB = _d[2], _e = _d[3], labelB = _e === void 0 ? "" : _e;
        var comparisonArr = [
            compareNumStrings(majorA, majorB),
            compareNumStrings(minorA, minorB),
            compareNumStrings(patchA, patchB),
        ];
        try {
            for (var comparisonArr_1 = __values(comparisonArr), comparisonArr_1_1 = comparisonArr_1.next(); !comparisonArr_1_1.done; comparisonArr_1_1 = comparisonArr_1.next()) {
                var comparison = comparisonArr_1_1.value;
                if (comparison) {
                    return comparison;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (comparisonArr_1_1 && !comparisonArr_1_1.done && (_a = comparisonArr_1["return"])) _a.call(comparisonArr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return labelA === labelB ? 0 : labelA < labelB ? -1 : 1;
    });
};
console.log(sortSemVer([
    "2.0.11-alpha",
    "0.1.7+amd64",
    "0.10.7+20141005",
    "2.0.12+i386",
    "1.2.34",
    "2.0.11+i386",
    "20.1.1+i386",
]));
// 0.1.7+amd64
// 0.10.7+20141005
// 1.2.34
// 2.0.11-alpha
// 2.0.11+i386
// 2.0.12+i386
// 20.1.1+i386
