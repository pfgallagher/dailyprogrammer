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
var cleanStr = function (input) {
    return input.replace(/\W/g, "").toLowerCase();
};
var reverseStr = function (input) { return __spread(input).reverse().join(""); };
var isPalindrome = function (input) {
    return cleanStr(input) === reverseStr(cleanStr(input))
        ? "Palindrome"
        : "Not a palindrome";
};
console.log(isPalindrome("Was it a car\nor a cat\nI saw?"));
// "Palindrome"
console.log(isPalindrome("A man, a plan,\na canal, a hedgehog,\n\na podiatrist,\nPanama!"));
// "Not a palindrome"
console.log(isPalindrome("Are we not drawn onward,\nwe few, drawn onward to new area?"));
// "Not a palindrome"
console.log(isPalindrome("Dammit I’m mad.\nEvil is a deed as I live.\nGod, am I reviled? I rise, my bed on a sun, I melt.\nTo be not one man emanating is sad. I piss.\nAlas, it is so late. Who stops to help?\nMan, it is hot. I’m in it. I tell.\nI am not a devil. I level “Mad Dog”.\nAh, say burning is, as a deified gulp,\nIn my halo of a mired rum tin.\nI erase many men. Oh, to be man, a sin.\nIs evil in a clam? In a trap?\nNo. It is open. On it I was stuck.\nRats peed on hope. Elsewhere dips a web.\nBe still if I fill its ebb.\nEw, a spider… eh?\nWe sleep. Oh no!\nDeep, stark cuts saw it in one position.\nPart animal, can I live? Sin is a name.\nBoth, one… my names are in it.\nMurder? I’m a fool.\nA hymn I plug, deified as a sign in ruby ash,\nA Goddam level I lived at.\nOn mail let it in. I’m it.\nOh, sit in ample hot spots. Oh wet!\nA loss it is alas (sip). I’d assign it a name.\nName not one bottle minus an ode by me:\n“Sir, I deliver. I’m a dog”\nEvil is a deed as I live.\nDammit I’m mad."));
// "Palindrome"
