var dnaMap = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
};
var dnaComplement = function (input) {
    return [
        input,
        input
            .split(" ")
            .map(function (base) { return dnaMap[base]; })
            .join(" "),
    ].join("\n");
};
console.log(dnaComplement("A T A A G C"));
// A T A A G C
// T A T T C G
console.log(dnaComplement("A A T G C C T A T G G C"));
// A A T G C C T A T G G C
// T T A C G G A T A C C G
