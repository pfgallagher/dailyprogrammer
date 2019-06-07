var longest = function (str) {
    var reduced = str.split(/(?<=[.!?]) /).reduce(function (acc, cur) {
        var words = cur.split(" ");
        if (words.length > acc.sentenceLength) {
            acc.longestSentence = cur;
            acc.sentenceLength = words.length;
            acc.wordsLongerThanFourChars = words
                .map(function (word) { return word.replace(/[.!?;:,]/, ""); })
                .filter(function (word) { return word.length > 4; });
        }
        return acc;
    }, { longestSentence: "", sentenceLength: 0, wordsLongerThanFourChars: [""] });
    var longestSentence = reduced.longestSentence, sentenceLength = reduced.sentenceLength, wordsLongerThanFourChars = reduced.wordsLongerThanFourChars;
    return "\nLongest sentence: " + longestSentence + "\n\nSentence length: " + sentenceLength + " words\n\nWords longer than four characters: " + wordsLongerThanFourChars.join(", ") + "\n";
};
console.log(longest("If it will feed nothing else, it will feed my revenge. He hath disgrac'd me and hind'red me half a million; laugh'd at my losses, mock'd at my gains, scorned my nation, thwarted my bargains, cooled my friends, heated mine enemies. And what's his reason? I am a Jew. Hath not a Jew eyes? Hath not a Jew hands, organs, dimensions, senses, affections, passions, fed with the same food, hurt with the same weapons, subject to the same diseases, healed by the same means, warmed and cooled by the same winter and summer, as a Christian is? If you prick us, do we not bleed? If you tickle us, do we not laugh? If you poison us, do we not die? And if you wrong us, shall we not revenge? If we are like you in the rest, we will resemble you in that. If a Jew wrong a Christian, what is his humility? Revenge. If a Christian wrong a Jew, what should his sufferance be by Christian example? Why, revenge. The villainy you teach me I will execute; and it shall go hard but I will better the instruction."));
