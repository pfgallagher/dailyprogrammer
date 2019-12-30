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
var readFlags = function (possibleFlags, command) {
    var flagMap = Object.fromEntries(possibleFlags.split("\n").map(function (flag) { return flag.split(":"); }));
    var args = [];
    command.split(" ").forEach(function (arg) {
        if (arg.startsWith("--")) {
            args.push({
                name: arg.slice(2),
                type: "flag"
            });
            return;
        }
        if (arg.startsWith("-")) {
            var flags = __spread(arg.slice(1));
            flags.forEach(function (flag) {
                args.push({
                    name: flagMap[flag],
                    type: "flag"
                });
            });
            return;
        }
        args.push({
            name: arg,
            type: "parameter"
        });
    });
    args.forEach(function (arg) {
        var name = arg.name, type = arg.type;
        console.log(type + ": " + name);
    });
};
console.log(readFlags("a:all\nf:force\nn:networking\nN:numerical-list", "-aN 12 --verbose 192.168.0.44"));
// flag: all
// flag: numerical-list
// parameter: 12
// flag: verbose
// parameter: 192.168.0.44
