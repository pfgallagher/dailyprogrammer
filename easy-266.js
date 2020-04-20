var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var nodeDegrees = function (inputNodes) {
    var e_1, _a;
    var nodeMap = {};
    var addNode = function (key, val) {
        if (nodeMap[key]) {
            nodeMap[key].push(val);
        }
        else {
            nodeMap[key] = [val];
        }
    };
    try {
        for (var inputNodes_1 = __values(inputNodes), inputNodes_1_1 = inputNodes_1.next(); !inputNodes_1_1.done; inputNodes_1_1 = inputNodes_1.next()) {
            var _b = __read(inputNodes_1_1.value, 2), key = _b[0], val = _b[1];
            addNode(key, val);
            addNode(val, key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (inputNodes_1_1 && !inputNodes_1_1.done && (_a = inputNodes_1["return"])) _a.call(inputNodes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return Object.entries(nodeMap)
        .map(function (_a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        return "Node " + key + " has a degree of " + val.length;
    })
        .join("\n");
};
console.log(nodeDegrees([
    ["1", "2"],
    ["1", "3"],
]), "\n");
// Node 1 has a degree of 2
// Node 2 has a degree of 1
// Node 3 has a degree of 1
console.log(nodeDegrees([
    ["1", "2"],
    ["1", "3"],
    ["2", "3"],
    ["1", "4"],
    ["3", "4"],
    ["1", "5"],
    ["2", "5"],
    ["1", "6"],
    ["2", "6"],
    ["3", "6"],
    ["3", "7"],
    ["5", "7"],
    ["6", "7"],
    ["3", "8"],
    ["4", "8"],
    ["6", "8"],
    ["7", "8"],
    ["2", "9"],
    ["5", "9"],
    ["6", "9"],
    ["2", "10"],
    ["9", "10"],
    ["6", "11"],
    ["7", "11"],
    ["8", "11"],
    ["9", "11"],
    ["10", "11"],
    ["1", "12"],
    ["6", "12"],
    ["7", "12"],
    ["8", "12"],
    ["11", "12"],
    ["6", "13"],
    ["7", "13"],
    ["9", "13"],
    ["10", "13"],
    ["11", "13"],
    ["5", "14"],
    ["8", "14"],
    ["12", "14"],
    ["13", "14"],
    ["1", "15"],
    ["2", "15"],
    ["5", "15"],
    ["9", "15"],
    ["10", "15"],
    ["11", "15"],
    ["12", "15"],
    ["13", "15"],
    ["1", "16"],
    ["2", "16"],
    ["5", "16"],
    ["6", "16"],
    ["11", "16"],
    ["12", "16"],
    ["13", "16"],
    ["14", "16"],
    ["15", "16"],
]));
// Node 1 has a degree of 8
// Node 2 has a degree of 8
// Node 3 has a degree of 6
// Node 4 has a degree of 3
// Node 5 has a degree of 7
// Node 6 has a degree of 10
// Node 7 has a degree of 7
// Node 8 has a degree of 7
// Node 9 has a degree of 7
// Node 10 has a degree of 5
// Node 11 has a degree of 9
// Node 12 has a degree of 8
// Node 13 has a degree of 8
// Node 14 has a degree of 5
// Node 15 has a degree of 9
// Node 16 has a degree of 9
