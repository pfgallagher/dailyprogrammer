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
var validateURL = function (url) {
    var _a = __read(url.split(/[?&]/g)), scheme = _a[0], queryStrings = _a.slice(1);
    return /[^\w0-9-.~%:/?=+&#]/gi.test(url) ||
        !/[a-z]+[a-z0-9+.-]*:\/\/.*/.test(scheme)
        ? "The given URL is invalid"
        : Object.fromEntries(queryStrings.map(function (queryString) { return queryString.split("="); }));
};
console.log(validateURL("http://en.wikipedia.org/w/index.php?title=Main_Page&action=edit")); // {title: "Main_Page", action: "edit"}
console.log(validateURL("http://en.wikipedia.org/w/index.php?title=Main_Page")); // {title: "Main_Page"}
console.log(validateURL("http://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page")); // {title: 'Special:UserLogin', returnto: 'Main+Page'}
console.log(validateURL("http://en.wikipedia.org/w/index.php?title= hello world!&action=é")); // -> The given URL is invalid
