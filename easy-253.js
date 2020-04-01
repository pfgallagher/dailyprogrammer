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
var ULI = function (_a) {
    var e_1, _b;
    var annualLoanAmountInDollars = _a.annualLoanAmountInDollars, clawbackBalanceTrigger = _a.clawbackBalanceTrigger, incomeStreamInThousands = _a.incomeStreamInThousands, interestRatePercent = _a.interestRatePercent, royaltyRateOver65Percent = _a.royaltyRateOver65Percent, royaltyRateUnder65Percent = _a.royaltyRateUnder65Percent, startAge = _a.startAge;
    var _c = __read([
        royaltyRateOver65Percent,
        royaltyRateUnder65Percent,
        interestRatePercent,
    ].map(function (rate) { return rate / 100; }), 3), royaltyRateOver65 = _c[0], royaltyRateUnder65 = _c[1], interestRate = _c[2];
    var incomeStream = incomeStreamInThousands.split(" ").map(function (income, i) { return ({
        age: startAge + i,
        income: parseInt(income, 10) * 1000
    }); });
    var repaymentsFromIncome = 0;
    var repaymentsFromClawback = 0;
    var totalBalance = 0;
    var totalLoansTaken = 0;
    var applyAnnualLoanAndInterest = function () {
        totalLoansTaken += annualLoanAmountInDollars;
        totalBalance *= 1 + interestRate;
        totalBalance += annualLoanAmountInDollars;
    };
    try {
        for (var incomeStream_1 = __values(incomeStream), incomeStream_1_1 = incomeStream_1.next(); !incomeStream_1_1.done; incomeStream_1_1 = incomeStream_1.next()) {
            var _d = incomeStream_1_1.value, age = _d.age, income = _d.income;
            applyAnnualLoanAndInterest();
            var royaltyRate = age < 65 ? royaltyRateUnder65 : royaltyRateOver65;
            var royalty = income * royaltyRate;
            var clawback = totalBalance >= clawbackBalanceTrigger
                ? royaltyRate * annualLoanAmountInDollars
                : 0;
            repaymentsFromIncome += royalty;
            repaymentsFromClawback += clawback;
            totalBalance -= royalty + clawback;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (incomeStream_1_1 && !incomeStream_1_1.done && (_b = incomeStream_1["return"])) _b.call(incomeStream_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var inThousands = function (dollars) {
        return "$" + (dollars / 1000).toFixed(2);
    };
    return "(In Thousands)\nOverall Loans Taken: " + inThousands(totalLoansTaken) + "\nRepayments from Income: " + inThousands(repaymentsFromIncome) + "\nRepayments from Benefit Clawbacks: " + inThousands(repaymentsFromClawback) + "\nEnding Balance with Interest: " + inThousands(totalBalance) + "\n";
};
console.log(ULI({
    annualLoanAmountInDollars: 15000,
    clawbackBalanceTrigger: 100000,
    incomeStreamInThousands: "0 0 20 20 20 20 20 20 20 20 20 20 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
    interestRatePercent: 2,
    royaltyRateOver65Percent: 40,
    royaltyRateUnder65Percent: 20,
    startAge: 18
}));
// (In Thousands)
// Overall Loans Taken: $1080.00
// Repayments from Income: $280.00
// Repayments from Benefit Clawbacks: $270.00
// Ending Balance with Interest: $1169.09
console.log(ULI({
    annualLoanAmountInDollars: 15000,
    clawbackBalanceTrigger: 100000,
    incomeStreamInThousands: "0 0 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 60 60 60 60 60 60 60 60 60 60 100 120 140 160 200 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10",
    interestRatePercent: 2,
    royaltyRateOver65Percent: 40,
    royaltyRateUnder65Percent: 20,
    startAge: 18
}));
// (In Thousands)
// Overall Loans Taken: $1005.00
// Repayments from Income: $584.00
// Repayments from Benefit Clawbacks: $237.00
// Ending Balance with Interest: $509.49
