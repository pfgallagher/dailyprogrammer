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
var resolveSymlink = function (input) {
    var e_1, _a;
    var _b = __read(input.split("\n").reverse()), target = _b[0], symlinks = _b.slice(1);
    var symlinkEntries = symlinks.map(function (symlink) { return symlink.split(":"); });
    var resolvedSymlink = target;
    while (symlinkEntries.some(function (_a) {
        var _b = __read(_a, 1), beforePath = _b[0];
        return resolvedSymlink.includes(beforePath);
    })) {
        try {
            for (var _c = (e_1 = void 0, __values(symlinkEntries.entries())), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2), i = _e[0], symlinkEntry = _e[1];
                var beforePath = symlinkEntry[0];
                var afterPath = symlinkEntry[1];
                if (afterPath.endsWith("/")) {
                    afterPath = afterPath.slice(0, -1);
                }
                if (resolvedSymlink.includes(beforePath)) {
                    resolvedSymlink = resolvedSymlink.replace(beforePath, afterPath);
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return resolvedSymlink;
};
console.log(resolveSymlink("/bin/thing:/bin/thing-3\n/bin/thing-3:/bin/thing-3.2\n/bin/thing-3.2/include:/usr/include\n/usr/include/SDL:/usr/local/include/SDL\n/bin/thing/include/SDL/stan"));
// /usr/local/include/SDL/stan
console.log(resolveSymlink("/home/elite/documents:/media/mmcstick/docs\n/home/elite/documents/office"));
// /media/mmcstick/docs/office
console.log(resolveSymlink("/bin:/usr/bin\n/usr/bin:/usr/local/bin/\n/usr/local/bin/log:/var/log-2014\n/bin/log/rc"));
// /var/log-2014/rc
// console.log(resolveSymlink("/etc:/tmp/etc\n/tmp/etc/:/etc/\n/etc/modprobe.d/config/"));
// Infinite loop
