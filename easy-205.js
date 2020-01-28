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
var monthMap = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
    "10": "November",
    "11": "December"
};
var ordinalMap = {
    "1": "1st",
    "2": "2nd",
    "3": "3rd",
    "21": "21st",
    "22": "22nd",
    "23": "23rd",
    "31": "31st"
};
var getOrdinal = function (day) {
    return day.toString() in ordinalMap ? ordinalMap[day.toString()] : day + "th";
};
var friendlyDateRange = function (input) {
    var _a = __read(input.split(" ").map(function (date) {
        var _a = __read(date.split("-").map(function (el) { return parseInt(el, 10); }), 3), year = _a[0], month = _a[1], day = _a[2];
        return new Date(Date.UTC(year, month - 1, day));
    }), 2), start = _a[0], end = _a[1];
    var _b = __read([start, end].map(function (date) { return date.getUTCFullYear(); }), 2), startYear = _b[0], endYear = _b[1];
    var _c = __read([start, end].map(function (date) { return monthMap[date.getUTCMonth().toString()]; }), 2), startMonth = _c[0], endMonth = _c[1];
    var _d = __read([start, end].map(function (date) { return date.getUTCDate(); }), 2), startDay = _d[0], endDay = _d[1];
    var _e = __read([start, end].map(function (date) { return date.getTime(); }), 2), startTime = _e[0], endTime = _e[1];
    var _f = __read([startDay, endDay].map(function (date) {
        return getOrdinal(date);
    }), 2), startOrdinal = _f[0], endOrdinal = _f[1];
    var startIsSameAsEnd = !(startTime - endTime);
    var startYearIsCurrentYear = startYear === new Date().getUTCFullYear();
    var startIsSameMonthAndYearAsEnd = startYear === endYear && startMonth === endMonth;
    var avgMSInYear = 31557600000; // Not going to deal with leap years.
    var differenceIsLessThanAYear = endTime - startTime < avgMSInYear;
    var startYearIsSameAsEndYear = startYear === endYear;
    if (startIsSameAsEnd) {
        return startMonth + " " + startOrdinal + ", " + startYear;
    }
    if (startYearIsCurrentYear) {
        if (startIsSameMonthAndYearAsEnd) {
            return startMonth + " " + startOrdinal + " \u2013 " + endOrdinal;
        }
        if (differenceIsLessThanAYear) {
            return startMonth + " " + startOrdinal + " \u2013 " + endMonth + " " + endOrdinal;
        }
    }
    if (startYearIsSameAsEndYear) {
        return startMonth + " " + startOrdinal + " \u2013 " + endMonth + " " + endOrdinal + ", " + startYear;
    }
    return startMonth + " " + startOrdinal + ", " + startYear + " \u2013 " + endMonth + " " + endOrdinal + ", " + endYear;
};
console.log(friendlyDateRange("2020-07-01 2020-07-04"));
//     July 1st - 4th
console.log(friendlyDateRange("2020-12-01 2021-02-03"));
//     December 1st - February 3rd
console.log(friendlyDateRange("2015-12-01 2017-02-03"));
//     December 1st, 2015 - February 3rd, 2017
console.log(friendlyDateRange("2016-03-01 2016-05-05"));
//     March 1st - May 5th, 2016
console.log(friendlyDateRange("2017-01-01 2017-01-01"));
//     January 1st, 2017
console.log(friendlyDateRange("2022-09-05 2023-09-04"));
//     September 5th, 2022 - September 4th, 2023
console.log(friendlyDateRange("2015-04-01 2020-09-10"));
//     April 1st, 2015 - September 10th, 2020
console.log(friendlyDateRange("2015-12-11 2016-12-11"));
//     December 11th, 2015 - December 11th, 2016.
