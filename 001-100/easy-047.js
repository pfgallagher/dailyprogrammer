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
var cipher = function (str, shift) {
    return __spread(str).map(function (char) {
        var charCode = char.charCodeAt(0);
        return charCode >= 97 && charCode <= 122
            ? String.fromCharCode(((charCode - 97 + shift) % 26) + 97)
            : charCode >= 65 && charCode <= 90
                ? String.fromCharCode(((charCode - 65 + shift) % 26) + 65)
                : char;
    })
        .join("");
};
var bruteForceCipher = function (str) {
    var decodedArr = [];
    for (var i = 0; i < 26; i++) {
        decodedArr.push(cipher(str, i));
    }
    decodedArr.forEach(function (decodedString) {
        console.log(decodedString + "\n");
    });
};
bruteForceCipher("Spzalu - zayhunl dvtlu sfpun pu wvukz kpzaypibapun zdvykz pz uv ihzpz mvy h zfzalt vm nvclyutlua.  Zbwyltl leljbapcl wvdly klypclz myvt h thukhal myvt aol thzzlz, uva myvt zvtl mhyjpjhs hxbhapj jlyltvuf. Fvb jhu'a lewlja av dplsk zbwyltl leljbapcl wvdly qbza 'jhbzl zvtl dhalyf ahya aoyld h zdvyk ha fvb! P tlhu, pm P dlua hyvbuk zhfpu' P dhz hu ltwlylyvy qbza iljhbzl zvtl tvpzalulk ipua ohk sviilk h zjptpahy ha tl aolf'k wba tl hdhf!... Ho, huk uvd dl zll aol cpvslujl puolylua pu aol zfzalt! Jvtl zll aol cpvslujl puolylua pu aol zfzalt! Olsw! Olsw! P't ilpun ylwylzzlk!");
