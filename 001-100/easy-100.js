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
var estimateSleepCycle = function (wakeupTime) {
    var _a = __read(wakeupTime.split(" "), 2), time = _a[0], period = _a[1];
    var _b = __read(time.split(":"), 2), hours = _b[0], minutes = _b[1];
    var hrNum = parseInt(hours, 10);
    var minNum = parseInt(minutes, 10);
    if (period === "PM" && hrNum < 12) {
        hrNum += 12;
    }
    var wakeTime = new Date(Date.UTC(2050, 6, 15, hrNum, minNum)).getTime();
    var sleepCycleLength = 5400000;
    var possibleTimes = [];
    for (var i = 1; i < 10; i++) {
        var newTime = new Date();
        newTime.setTime(wakeTime - (sleepCycleLength * i));
        possibleTimes.push(newTime);
    }
    return possibleTimes.map(function (possibleTime) {
        var hr = possibleTime.getUTCHours();
        var finalPeriod = hr >= 12 ? "PM" : "AM";
        if (hr > 12) {
            hr -= 12;
        }
        if (hr === 0) {
            hr += 12;
        }
        return hr + ":" + possibleTime.getUTCMinutes() + " " + finalPeriod;
    }).reverse();
};
console.log(estimateSleepCycle("6:15 AM"));
