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
var strToCharCodeArr = function (str) {
    return __spread(str).map(function (char) { return char.charCodeAt(0); });
};
var charCodeArrToStr = function (charCodeArr) {
    return charCodeArr.map(function (charCode) { return String.fromCharCode(charCode); }).join("");
};
var encipherVigenere = function (plaintext, key) {
    var plaintextArr = strToCharCodeArr(plaintext);
    var keyArr = strToCharCodeArr(__spread(plaintext).map(function (char, i) { return key[i % key.length]; }).join(""));
    return charCodeArrToStr(plaintextArr.map(function (char, i) { return ((char + keyArr[i] - 130) % 26) + 65; }));
};
var decipherVigenere = function (ciphertext, key) {
    var ciphertextArr = strToCharCodeArr(ciphertext);
    var keyArr = strToCharCodeArr(__spread(ciphertext).map(function (char, i) { return key[i % key.length]; }).join(""));
    return charCodeArrToStr(ciphertextArr.map(function (char, i) { return ((char - keyArr[i] + 130) % 26) + 65; }));
};
console.log(encipherVigenere("THECAKEISALIE", "GLADOS")); // ZSEFOCKTSDZAK
console.log(decipherVigenere("ZSEFOCKTSDZAK", "GLADOS")); // THECAKEISALIE
console.log(decipherVigenere("HSULAREFOTXNMYNJOUZWYILGPRYZQVBBZABLBWHMFGWFVPMYWAVVTYISCIZRLVGOPGBRAKLUGJUZGLNBASTUQAGAVDZIGZFFWVLZSAZRGPVXUCUZBYLRXZSAZRYIHMIMTOJBZFZDEYMFPMAGSMUGBHUVYTSABBAISKXVUCAQABLDETIFGICRVWEWHSWECBVJMQGPRIBYYMBSAPOFRIMOLBUXFIIMAGCEOFWOXHAKUZISYMAHUOKSWOVGBULIBPICYNBBXJXSIXRANNBTVGSNKR", "BEGINNING"));
