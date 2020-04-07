"use strict";
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
exports.__esModule = true;
var util_1 = require("./lib/util");
var mostPresidentsAlive = function (csvInput) {
    var e_1, _a, e_2, _b;
    var rows = csvInput.replace(/, +/g, ",").split("\n");
    var headers = rows[0].split(",");
    var presidentInfo = rows
        .slice(1)
        .map(function (president) {
        return Object.fromEntries(headers.map(function (header, i) { return [header, president.split(",")[i]]; }));
    });
    var currentDate = new Date().toDateString().slice(4);
    try {
        for (var presidentInfo_1 = __values(presidentInfo), presidentInfo_1_1 = presidentInfo_1.next(); !presidentInfo_1_1.done; presidentInfo_1_1 = presidentInfo_1.next()) {
            var president = presidentInfo_1_1.value;
            var birthDate = president["BIRTH DATE"], deathDateOrCurrentDate = president["DEATH DATE"];
            var _c = __read([
                birthDate,
                deathDateOrCurrentDate || currentDate,
            ].map(function (date) { return parseInt(date.split(" ")[2], 10); }), 2), birthYear = _c[0], deathOrCurrentYear = _c[1];
            president["YEARS ALIVE"] = util_1.range(birthYear, deathOrCurrentYear);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (presidentInfo_1_1 && !presidentInfo_1_1.done && (_a = presidentInfo_1["return"])) _a.call(presidentInfo_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var yearsMap = new Map();
    try {
        for (var presidentInfo_2 = __values(presidentInfo), presidentInfo_2_1 = presidentInfo_2.next(); !presidentInfo_2_1.done; presidentInfo_2_1 = presidentInfo_2.next()) {
            var yearsAlive = presidentInfo_2_1.value["YEARS ALIVE"];
            yearsAlive.forEach(function (year) {
                if (yearsMap.has(year)) {
                    var yearCount = yearsMap.get(year);
                    yearsMap.set(year, yearCount + 1);
                }
                else {
                    yearsMap.set(year, 1);
                }
            });
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (presidentInfo_2_1 && !presidentInfo_2_1.done && (_b = presidentInfo_2["return"])) _b.call(presidentInfo_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var largestNumberOfAlivePresidents = Math.max.apply(Math, __spread(__spread(yearsMap).map(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], count = _b[1];
        return count;
    })));
    return __spread(yearsMap).filter(function (_a) {
        var _b = __read(_a, 2), _ = _b[0], count = _b[1];
        return count === largestNumberOfAlivePresidents;
    })
        .map(function (_a) {
        var _b = __read(_a, 2), year = _b[0], _ = _b[1];
        return year;
    });
};
console.log(mostPresidentsAlive("PRESIDENT,  BIRTH DATE, BIRTH PLACE,    DEATH DATE, LOCATION OF DEATH\nGeorge Washington,  Feb 22 1732,    Westmoreland Co. Va.,   Dec 14 1799,    Mount Vernon Va.\nJohn Adams, Oct 30 1735,    Quincy Mass.,   July 4 1826,    Quincy Mass.\nThomas Jefferson,   Apr 13 1743,    Albemarle Co. Va.,  July 4 1826,    Albemarle Co. Va.\nJames Madison,  Mar 16 1751,    Port Conway Va.,    June 28 1836,   Orange Co. Va.\nJames Monroe,   Apr 28 1758,    Westmoreland Co. Va.,   July 4 1831,    New York New York\nJohn Quincy Adams,  July 11 1767,   Quincy Mass.,   Feb 23 1848,    Washington D.C.\nAndrew Jackson, Mar 15 1767,    Lancaster Co. S.C., June 8 1845,    Nashville Tennessee\nMartin Van Buren,   Dec 5 1782, Kinderhook New York,    July 24 1862,   Kinderhook New York\nWilliam Henry Harrison, Feb 9 1773, Charles City Co. Va.,   Apr 4 1841, Washington D.C.\nJohn Tyler, Mar 29 1790,    Charles City Co. Va.,   Jan 18 1862,    Richmond Va.\nJames K. Polk,  Nov 2 1795, Mecklenburg Co. N.C.,   June 15 1849,   Nashville Tennessee\nZachary Taylor, Nov 24 1784,    Orange County Va.,  July 9 1850,    Washington D.C\nMillard Fillmore,   Jan 7 1800, Cayuga Co. New York,    Mar 8 1874, Buffalo New York\nFranklin Pierce,    Nov 23 1804,    Hillsborough N.H.,  Oct 8 1869, Concord New Hamp.\nJames Buchanan, Apr 23 1791,    Cove Gap Pa.,   June 1 1868,    Lancaster Pa.\nAbraham Lincoln,    Feb 12 1809,    LaRue Co. Kentucky, Apr 15 1865,    Washington D.C.\nAndrew Johnson, Dec 29 1808,    Raleigh North Carolina, July 31 1875,   Elizabethton Tenn.\nUlysses S. Grant,   Apr 27 1822,    Point Pleasant Ohio,    July 23 1885,   Wilton New York\nRutherford B. Hayes,    Oct 4 1822, Delaware Ohio,  Jan 17 1893,    Fremont Ohio\nJames A. Garfield,  Nov 19 1831,    Cuyahoga Co. Ohio,  Sep 19 1881,    Elberon New Jersey\nChester Arthur, Oct 5 1829, Fairfield Vermont,  Nov 18 1886,    New York New York\nGrover Cleveland,   Mar 18 1837,    Caldwell New Jersey,    June 24 1908,   Princeton New Jersey\nBenjamin Harrison,  Aug 20 1833,    North Bend Ohio,    Mar 13 1901,    Indianapolis Indiana\nWilliam McKinley,   Jan 29 1843,    Niles Ohio, Sep 14 1901,    Buffalo New York\nTheodore Roosevelt, Oct 27 1858,    New York New York,  Jan 6 1919, Oyster Bay New York\nWilliam Howard Taft,    Sep 15 1857,    Cincinnati Ohio,    Mar 8 1930, Washington D.C.\nWoodrow Wilson, Dec 28 1856,    Staunton Virginia,  Feb 3 1924, Washington D.C.\nWarren G. Harding,  Nov 2 1865, Morrow County Ohio, Aug 2 1923, San Francisco Cal.\nCalvin Coolidge,    July 4 1872,    Plymouth Vermont,   Jan 5 1933, Northampton Mass.\nHerbert Hoover, Aug 10 1874,    West Branch Iowa,   Oct 20 1964,    New York New York\nFranklin Roosevelt, Jan 30 1882,    Hyde Park New York, Apr 12 1945,    Warm Springs Georgia\nHarry S. Truman,    May 8 1884, Lamar Missouri, Dec 26 1972,    Kansas City Missouri\nDwight Eisenhower,  Oct 14 1890,    Denison Texas,  Mar 28 1969,    Washington D.C.\nJohn F. Kennedy,    May 29 1917,    Brookline Mass.,    Nov 22 1963,    Dallas Texas\nLyndon B. Johnson,  Aug 27 1908,    Gillespie Co. Texas,    Jan 22 1973,    Gillespie Co. Texas\nRichard Nixon,  Jan 9 1913, Yorba Linda Cal.,   Apr 22 1994,    New York New York\nGerald Ford,    July 14 1913,   Omaha Nebraska, Dec 26 2006,    Rancho Mirage Cal.\nJimmy Carter,   Oct 1 1924, Plains Georgia, ,   \nRonald Reagan,  Feb 6 1911, Tampico Illinois,   June 5 2004,    Los Angeles Cal.\nGeorge Bush,    June 12 1924,   Milton Mass.,   ,   \nBill Clinton,   Aug 19 1946,    Hope Arkansas,  ,   \nGeorge W. Bush, July 6 1946,    New Haven Conn.,    ,   \nBarack Obama,   Aug 4 1961, Honolulu Hawaii,    ,\nDonald Trump,   June 14 1946, New York New York,    ,"));
// [
// 	1822,
// 	1823,
// 	1824,
// 	1825,
// 	1826,
// 	1831,
// 	1833,
// 	1834,
// 	1835,
// 	1836,
// 	1837,
// 	1838,
// 	1839,
// 	1840,
// 	1841,
// 	1843,
// 	1844,
// 	1845,
// ];
