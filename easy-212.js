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
var doubleAndAddO = function (input) {
    return input + "o" + input.toLowerCase();
};
var rovarspraket = function (input) {
    return __spread(input).map(function (char) { return (/[^aeiouyå'äö\W]/i.test(char) ? doubleAndAddO(char) : char); })
        .join("");
};
console.log(rovarspraket("Jag talar Rövarspråket!"));
// Jojagog totalolaror Rorövovarorsospoproråkoketot!
console.log(rovarspraket("I'm speaking Robber's language!"));
// I'mom sospopeakokinongog Rorobobboberor'sos lolanongoguagoge!
console.log(rovarspraket("Tre Kronor är världens bästa ishockeylag."));
// Totrore Kokrorononoror äror vovärorloldodenonsos bobäsostota isoshohocockokeylolagog.
console.log(rovarspraket("Vår kung är coolare än er kung."));
// Vovåror kokunongog äror cocoololarore änon eror kokunongog.
