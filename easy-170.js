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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var cardValueMap = {
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 10,
    Queen: 10,
    King: 11,
    Ace: 11
};
var scoreHand = function (hand) {
    return hand.map(function (card) { return cardValueMap[card]; }).reduce(function (acc, cur) { return acc + cur; }, 0);
};
var checkBlackjack = function (input) {
    var e_1, _a;
    var playersAndHands = input
        .split("\n")
        .map(function (el) { return el.split(": "); })
        .map(function (_a) {
        var _b = __read(_a, 2), player = _b[0], hand = _b[1];
        return [
            player,
            hand.split(", ").map(function (card) { return card.slice(0, card.indexOf(" of")); }),
        ];
    });
    try {
        for (var playersAndHands_1 = __values(playersAndHands), playersAndHands_1_1 = playersAndHands_1.next(); !playersAndHands_1_1.done; playersAndHands_1_1 = playersAndHands_1.next()) {
            var playerAndHand = playersAndHands_1_1.value;
            var _b = __read(playerAndHand, 2), player = _b[0], hand = _b[1];
            if (hand.length === 5 && scoreHand(hand) <= 21) {
                return player + " has won with a 5-card trick!";
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (playersAndHands_1_1 && !playersAndHands_1_1.done && (_a = playersAndHands_1["return"])) _a.call(playersAndHands_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var playersAndScoredHands = playersAndHands.map(function (_a) {
        var _b = __read(_a, 2), player = _b[0], hand = _b[1];
        return [
            player,
            scoreHand(hand),
        ];
    });
    var winners = playersAndScoredHands.filter(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], score = _b[1];
        return score === 21;
    });
    if (winners.length > 1) {
        return "Tie.";
    }
    return winners[0][0] + " has won!";
};
console.log(checkBlackjack("Alice: Ace of Diamonds, Ten of Clubs\nBob: Three of Hearts, Six of Spades, Seven of Spades\nChris: Ten of Hearts, Three of Diamonds, Jack of Clubs")); // Alice has won!
console.log(checkBlackjack("Alice: Ace of Diamonds, Ten of Clubs\nBob: Three of Hearts, Six of Spades, Seven of Spades\nChris: Ten of Hearts, Three of Diamonds, Jack of Clubs\nDavid: Two of Hearts, Three of Clubs, Three of Hearts, Five of Hearts, Six of Hearts")); // David has won with a 5-card trick!
