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
var Card = /** @class */ (function () {
    function Card(suit, value) {
        this.suit = suit;
        this.value = value;
        this.name = value + " of " + suit;
    }
    return Card;
}());
// tslint:disable-next-line: max-classes-per-file
var Decks = /** @class */ (function () {
    function Decks(numDecks) {
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
                for (var i_1 = 0; i_1 < _this.deck.length; i_1++) {
                    var randomI = Math.floor(Math.random() * i_1);
                    _a = __read([_this.deck[randomI], _this.deck[i_1]], 2), _this.deck[i_1] = _a[0], _this.deck[randomI] = _a[1];
                }
            }
            return _this.getDeck();
        };
        this.getDeck = function () {
            return _this.deck;
        };
        this.dealBlackjack = function () {
            _this.shuffle(7);
            var hands = 0;
            var naturalBlackjacks = 0;
            while (_this.deck.length) {
                var _a = __read([_this.deal(), _this.deal()], 2), cardOne = _a[0], cardTwo = _a[1];
                if (cardOne && cardTwo && _this.isBlackjack([cardOne, cardTwo])) {
                    naturalBlackjacks++;
                }
                hands++;
            }
            return "After " + hands + " hands, there were " + naturalBlackjacks + " natural blackjacks at " + ((naturalBlackjacks / hands) *
                100).toFixed(2) + "%";
        };
        this.isBlackjack = function (cardArr) {
            return _this.handContainsAce(cardArr) && _this.handContainsTenValueCard(cardArr);
        };
        this.handContainsAce = function (cardArr) {
            return cardArr.some(function (_a) {
                var value = _a.value;
                return value === "Ace";
            });
        };
        this.handContainsTenValueCard = function (cardArr) {
            var tenValueCards = ["10", "Jack", "Queen", "King"];
            return cardArr.some(function (_a) {
                var value = _a.value;
                return tenValueCards.includes(value);
            });
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
    return Decks;
}());
var newDeck = new Decks(10);
console.log(newDeck.dealBlackjack());
