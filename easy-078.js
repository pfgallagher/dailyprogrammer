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
var chars = "abcdefghijklmnopqrstuvwxyz1234567890`-=[]\\;',./";
var modifiedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()~_+{}|:\"<>?";
var keys = [];
__spread(chars).forEach(function (char, i) {
    keys.push({
        key: char,
        keyWithCapsLock: char.toUpperCase(),
        keyWithShift: modifiedChars[i],
        keyWithShiftAndCapsLock: modifiedChars[i].toLowerCase()
    });
});
var keyToChar = function (key, shift, capsLock) {
    var foundKey = keys.find(function (eachKey) { return eachKey.key === key; });
    if (foundKey) {
        if (shift && capsLock) {
            return foundKey.keyWithShiftAndCapsLock;
        }
        if (shift) {
            return foundKey.keyWithShift;
        }
        if (capsLock) {
            return foundKey.keyWithCapsLock;
        }
        return foundKey.key;
    }
    return "Invalid Key";
};
console.log(keyToChar("a", false, false));
console.log(keyToChar("a", true, false));
console.log(keyToChar("a", true, true));
console.log(keyToChar("1", false, false));
console.log(keyToChar("1", true, false));
console.log(keyToChar("1", true, true));
console.log(keyToChar("[", false, false));
console.log(keyToChar("[", true, false));
console.log(keyToChar("[", true, true));
