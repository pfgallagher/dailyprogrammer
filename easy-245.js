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
var dateDilemma = function (dates) {
    return dates
        .map(function (d) { return d.split(/[/\- ]/g); })
        .map(function (d) { return (d[0].length !== 4 ? [d[2], d[0], d[1]] : d); })
        .map(function (d) { return (d[0].length === 2 ? __spread(["20" + d[0]], d.slice(1)) : d); })
        .map(function (d) { return new Date(d.join("-")).toISOString().slice(0, 10); });
};
console.log(dateDilemma([
    "2/13/15",
    "1-31-10",
    "5 10 2015",
    "2012 3 17",
    "2001-01-01",
    "2008/01/07",
]));
// 2015-02-13
// 2010-01-31
// 2015-05-10
// 2012-03-17
// 2001-01-01
// 2008-01-07
