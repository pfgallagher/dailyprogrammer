var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var validEscapes = {
    '\\"': '"',
    "\\'": "'",
    "\\?": "?",
    "\\\\": "\\",
    "\\a": "a",
    "\\b": "\b",
    "\\e": "e",
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "\t",
    "\\v": "\v"
};
var unescapeString = function (input) {
    var e_1, _a;
    var possibleEscapeCodes = /(\\[a-z\\'"?])/g;
    var matches = input.match(possibleEscapeCodes);
    var result = input.slice(1, -1);
    var singleQuoteCount = 0;
    var doubleQuoteCount = 0;
    if (matches) {
        try {
            for (var matches_1 = __values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                var match = matches_1_1.value;
                if (match === "\\'") {
                    singleQuoteCount++;
                }
                if (match === '\\"') {
                    doubleQuoteCount++;
                }
                if (validEscapes[match]) {
                    result = result.replace(match, validEscapes[match]);
                }
                else {
                    return "Invalid string! (Bad escape code, " + match + ")";
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (matches_1_1 && !matches_1_1.done && (_a = matches_1["return"])) _a.call(matches_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!(singleQuoteCount % 2) && !(doubleQuoteCount % 2)) {
            return result;
        }
        return "Invalid string! (Doesn't end)";
    }
    return input;
};
console.log(unescapeString(String.raw(__makeTemplateObject(["\"hello,\nworld!\""], ["\"hello,\\nworld!\""]))));
// hello,
// world!
console.log("\n");
console.log(unescapeString(String.raw(__makeTemplateObject(["\"\"\\\"\""], ["\"\\\"\\\\\\\"\""]))));
// "\"
console.log("\n");
console.log(unescapeString(String.raw(__makeTemplateObject(["\"an invalid\nstring\""], ["\"an invalid\\nstring\\\""]))));
// Invalid string! (Doesn't end)
console.log("\n");
console.log(unescapeString(String.raw(__makeTemplateObject(["\"another invalid string q\""], ["\"another invalid string \\q\""]))));
// Invalid string! (Bad escape code, \q)
