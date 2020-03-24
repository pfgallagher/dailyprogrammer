"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var util_1 = require("./lib/util");
var createSecretSantaPairs = function (input) {
    var participants = util_1.shuffle(input.split("\n").flatMap(function (family, i) {
        return family.split(" ").map(function (name) { return ({
            family: i,
            name: name,
            secretSanta: "",
            secretSantaFor: ""
        }); });
    }));
    var areUnassignedParticipants = function () {
        return participants.some(function (_a) {
            var secretSanta = _a.secretSanta, secretSantaFor = _a.secretSantaFor;
            return !secretSanta || !secretSantaFor;
        });
    };
    var _loop_1 = function () {
        var santa = participants.find(function (_a) {
            var secretSantaFor = _a.secretSantaFor;
            return !secretSantaFor;
        });
        if (santa) {
            var santaName_1 = santa.name, santaFamily_1 = santa.family;
            var recipient = participants.find(function (_a) {
                var secretSanta = _a.secretSanta, family = _a.family, name = _a.name, secretSantaFor = _a.secretSantaFor;
                return !secretSanta &&
                    family !== santaFamily_1 &&
                    name !== santaName_1 &&
                    secretSantaFor !== santaName_1;
            });
            if (recipient) {
                santa.secretSantaFor = recipient.name;
                recipient.secretSanta = santa.name;
            }
            else {
                if (areUnassignedParticipants()) {
                    participants = util_1.shuffle(participants.map(function (participant) { return (__assign({}, participant, { secretSanta: "", secretSantaFor: "" })); }));
                }
            }
        }
    };
    while (areUnassignedParticipants()) {
        _loop_1();
    }
    return participants.map(function (participant) { return participant.name + " -> " + participant.secretSantaFor; });
};
console.log(createSecretSantaPairs("Joe\nJeff Jerry\nJohnson"));
console.log(createSecretSantaPairs("Sean\nWinnie\nBrian Amy\nSamir\nJoe Bethany\nBruno Anna Matthew Lucas\nGabriel Martha Philip\nAndre\nDanielle\nLeo Cinthia\nPaula\nMary Jane\nAnderson\nPriscilla\nRegis Julianna Arthur\nMark Marina\nAlex Andrea"));
// Test to check for a few incorrect pairs
for (var i = 0; i < 10000; i++) {
    var res = createSecretSantaPairs("Sean\nWinnie\nBrian Amy\nSamir\nJoe Bethany\nBruno Anna Matthew Lucas\nGabriel Martha Philip\nAndre\nDanielle\nLeo Cinthia\nPaula\nMary Jane\nAnderson\nPriscilla\nRegis Julianna Arthur\nMark Marina\nAlex Andrea");
    var test1 = res.find(function (el) { return el.includes("Brian") && el.includes("Amy"); });
    var test2 = res.find(function (el) { return el.includes("Joe") && el.includes("Bethany"); });
    var test3 = res.find(function (el) { return el.includes("Bruno") && el.includes("Anna"); });
    var test4 = res.find(function (el) { return el.includes("Bruno") && el.includes("Matthew"); });
    var test5 = res.find(function (el) { return el.includes("Bruno") && el.includes("Lucas"); });
    if ([test1, test2, test3, test4, test5].some(function (el) { return el; })) {
        console.log("Failure: Incorrect pairing");
    }
}
