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
var extractPunctsAndCaps = function (input) {
    var punctsAndCaps = [];
    __spread(input).forEach(function (char, i) {
        if (/[A-Z]/.test(char)) {
            punctsAndCaps.push(["capital", i]);
        }
        if (/[^ \w]/.test(char)) {
            punctsAndCaps.push([char, i]);
        }
    });
    return punctsAndCaps.sort(function (a, b) { return a[1] - b[1]; });
};
var mangleSentence = function (input) {
    var punctsAndCaps = extractPunctsAndCaps(input);
    var caps = [];
    var puncts = [];
    punctsAndCaps.forEach(function (entry) {
        if (entry[0] === "capital") {
            caps.push(entry);
        }
        else {
            puncts.push(entry);
        }
    });
    var sortedSentence = __spread(input
        .replace(/[^ \w]/g, "")
        .toLowerCase()
        .split(" ")
        .map(function (word) {
        return __spread(word).sort(function (a, b) { return (a < b ? -1 : b < a ? 1 : 0); }).join("");
    })
        .join(" "));
    puncts.forEach(function (_a) {
        var _b = __read(_a, 2), char = _b[0], i = _b[1];
        sortedSentence.splice(i, 0, char);
    });
    caps.forEach(function (_a) {
        var _b = __read(_a, 2), char = _b[0], i = _b[1];
        sortedSentence[i] = sortedSentence[i].toUpperCase();
    });
    return sortedSentence.join("");
};
console.log(mangleSentence("This challenge doesn't seem so hard."));
// Hist aceeghlln denos't eems os adhr.
console.log(mangleSentence("There are more things between heaven and earth, Horatio, than are dreamt of in your philosophy."));
// Eehrt aer emor ghinst beeentw aeehnv adn aehrt, Ahioort, ahnt aer ademrt fo in oruy hhilooppsy.
console.log(mangleSentence("Eye of Newt, and Toe of Frog, Wool of Bat, and Tongue of Dog."));
// Eey fo Entw, adn Eot fo Fgor, Loow fo Abt, adn Egnotu fo Dgo
console.log(mangleSentence("Adder's fork, and Blind-worm's sting, Lizard's leg, and Howlet's wing."));
// Adder's fkor, adn Bdilm-nors'w ginst, Adilrs'z egl, adn Ehlost'w ginw.
console.log(mangleSentence("For a charm of powerful trouble, like a hell-broth boil and bubble."));
// For a achmr fo eflopruw belortu, eikl a behh-llort bilo adn bbbelu.
