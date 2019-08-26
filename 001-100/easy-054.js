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
var chunkArr = function (arr, size) {
    var newArr = arr.slice();
    var chunk = newArr.splice(0, size);
    return chunk.length ? [chunk].concat(chunkArr(newArr, size)) : newArr;
};
var matrixCipherEncode = function (str, shift) {
    var chunkedStrings = chunkArr(__spread(str), shift);
    chunkedStrings.forEach(function (arr) {
        if (arr.length < shift) {
            var difference = shift - arr.length;
            for (var i = 0; i < difference; i++) {
                if (Array.isArray(arr)) {
                    arr.push(" ");
                }
                else if (typeof arr === "string") {
                    arr += " ";
                }
            }
        }
    });
    var parsedArrs = Array(shift).fill("");
    chunkedStrings.forEach(function (chunkedString) {
        __spread(chunkedString).forEach(function (char, i) {
            parsedArrs[i] += char;
        });
    });
    return parsedArrs.join("");
};
var matrixCipherDecode = function (str, shift) {
    return matrixCipherEncode(str, Math.ceil(str.length / shift));
};
console.log(matrixCipherEncode("The cake is a lie!", 3));
console.log(matrixCipherDecode("T kiaihces eea  l!", 3));
console.log(matrixCipherEncode("The cake is a lie!", 7));
console.log(matrixCipherDecode("Telh ieie s!c  aa k", 7));
var bruteforce = function (str, startPhrase) {
    for (var i = 1; i < str.length; i++) {
        var deciphered = matrixCipherDecode(str, i);
        if (deciphered.startsWith(startPhrase)) {
            return "\nKey:" + i + "\n\nMessage: " + deciphered;
        }
    }
    return "Could not decipher message.";
};
console.log(bruteforce("I rso wotTe,taef h  hl  socaeihtemonraaheamd svemsp l ems ayiN   Anofeadt.yueo oh ..  leaA .iaastnY.snw  do  d nyeuhl foor eiaotushlvrr.'oapee.avnv d  he,ey gOf   oiunrbpaunieeer r l geos ctoingoloyfq rcam  ilainpotlimadufhjv llt emiw aevsdnrsdriengieysr p tc ,tlfteuc uitwrrawavzo irhlez ftrelszloyyry bir  e huv no eadeauuyvsbs mtoe l.rb urat eeh y pOsreg fjnp,rocucee   otn cpgbmujltaayprgiayr uepfb btt,velyahe s,eogeraq  ue  ncysr.hcdzoo  ar duftTcioi'tahkmnarwxeeeegeae r  j", "It seems"));
