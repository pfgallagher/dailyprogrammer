"use strict";
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
exports.__esModule = true;
var Card = /** @class */ (function () {
    function Card(suit, value) {
        this.suit = suit;
        this.value = value;
        this.name = value + " of " + suit;
    }
    return Card;
}());
var Deck = /** @class */ (function () {
    function Deck(numDecks) {
        var e_1, _a, e_2, _b;
        var _this = this;
        this.deck = [];
        this.suits = ["♠", "♥", "♦", "♣"];
        this.values = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
            "Ace",
        ];
        this.deal = function () {
            if (_this.deck.length) {
                return _this.deck.pop();
            }
        };
        this.shuffle = function (numShuffles) {
            var _a;
            for (var i = 0; i < numShuffles; i++) {
                for (var j = 0; j < _this.deck.length; j++) {
                    var randomJ = Math.floor(Math.random() * j);
                    _a = __read([_this.deck[randomJ], _this.deck[j]], 2), _this.deck[j] = _a[0], _this.deck[randomJ] = _a[1];
                }
            }
        };
        for (var i = 0; i < numDecks; i++) {
            try {
                for (var _c = (e_1 = void 0, __values(this.suits)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var suit = _d.value;
                    try {
                        for (var _e = (e_2 = void 0, __values(this.values)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var value = _f.value;
                            var card = new Card(suit, value);
                            this.deck.push(card);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    return Deck;
}());
var playTexasHoldEm = function (numPlayers) {
    var deck = new Deck(1);
    deck.shuffle(7);
    var hands = [];
    for (var i = 0; i < numPlayers; i++) {
        var name_1 = !i ? "Your Hand" : "CPU " + i + " Hand";
        var hand = [deck.deal(), deck.deal()];
        hands.push({ name: name_1, hand: hand });
    }
    deck.deal();
    hands.push({
        hand: [deck.deal(), deck.deal(), deck.deal()],
        name: "Flop"
    });
    deck.deal();
    hands.push({
        hand: [deck.deal()],
        name: "Turn"
    });
    deck.deal();
    hands.push({
        hand: [deck.deal()],
        name: "River"
    });
    return hands
        .map(function (_a) {
        var hand = _a.hand, name = _a.name;
        return name + ": " + hand.map(function (_a) {
            var cardName = _a.name;
            return cardName;
        }).join(", ");
    })
        .join("\n");
};
console.log(playTexasHoldEm(3));
// How many players (2-8) ? 3
// Your hand: 2 of Clubs, 5 of Diamonds
// CPU 1 Hand: Ace of Spades, Ace of Hearts
// CPU 2 Hand: King of Clubs, Queen of Clubs
// Flop: 2 of Hearts, 5 of Clubs, Ace of Clubs
// Turn: King of Hearts
// River: Jack of Hearts
