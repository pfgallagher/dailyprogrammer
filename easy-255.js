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
var lightSwitches = function (input) {
    var e_1, _a;
    var _b = __read(input.split("\n")), numSwitchesStr = _b[0], rest = _b.slice(1);
    var instructions = rest.map(function (switchRange) {
        return switchRange
            .split(" ")
            .map(function (num) { return parseInt(num, 10); })
            .sort(function (a, b) { return a - b; });
    });
    var switches = Array(parseInt(numSwitchesStr, 10)).fill(false);
    try {
        for (var instructions_1 = __values(instructions), instructions_1_1 = instructions_1.next(); !instructions_1_1.done; instructions_1_1 = instructions_1.next()) {
            var _c = __read(instructions_1_1.value, 2), start = _c[0], end = _c[1];
            for (var i = start; i <= end; i++) {
                switches[i] = !switches[i];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (instructions_1_1 && !instructions_1_1.done && (_a = instructions_1["return"])) _a.call(instructions_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return switches.filter(function (switchEl) { return switchEl; }).length;
};
console.log(lightSwitches("10\n3 6\n0 4\n7 3\n9 9"));
// 7
console.log(lightSwitches("1000\n616 293\n344 942\n27 524\n716 291\n860 284\n74 928\n970 594\n832 772\n343 301\n194 882\n948 912\n533 654\n242 792\n408 34\n162 249\n852 693\n526 365\n869 303\n7 992\n200 487\n961 885\n678 828\n441 152\n394 453"));
// 423
// This theoretically should work. I was too impatient to wait for it to finish.
// import { promises } from "fs";
// (async () => {
// 	const test3 = await promises.readFile("./easy-255-data.txt", "utf-8");
// 	console.log(lightSwitches(test3));
// })();
