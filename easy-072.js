var patterns = {
    "000": "0",
    "001": "1",
    "010": "1",
    "011": "1",
    "100": "0",
    "101": "1",
    "110": "1",
    "111": "0"
};
var split = function (sequence) {
    var groups = [];
    for (var i = 0; i < sequence.length; i++) {
        var slice = sequence.slice(i, i + 3);
        if (slice.length === 3) {
            groups.push(slice);
        }
    }
    return groups;
};
var rule110 = function (initialSequence, iterations) {
    console.log(initialSequence);
    var sequence = split(initialSequence);
    for (var i = 0; i < iterations; i++) {
        var nextSeq = "0" + sequence.map(function (seq) { return patterns[seq]; }).join("") + "0";
        console.log(nextSeq);
        sequence = split(nextSeq);
    }
};
console.log(rule110("0000000000000001000000000000000", 250));
