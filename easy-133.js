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
var footTraffic = function (input) {
    var visitorLog = {};
    var roomLog = {};
    input.forEach(function (entryLog) {
        var _a = __read(entryLog, 4), visitorId = _a[0], roomId = _a[1], inOrOut = _a[2], timestamp = _a[3];
        if (!visitorLog[visitorId]) {
            visitorLog[visitorId] = [];
        }
        var curVisitNumber = Object.keys(visitorLog[visitorId]).length - 1;
        if (inOrOut === "I") {
            visitorLog[visitorId].push({
                entryTime: timestamp,
                exitTime: 0,
                roomId: roomId
            });
        }
        else if (inOrOut === "O") {
            var curVisit = visitorLog[visitorId][curVisitNumber];
            curVisit.exitTime = timestamp;
        }
    });
    Object.keys(visitorLog).forEach(function (visitor) {
        var visitorInfo = visitorLog[visitor];
        visitorInfo.forEach(function (visit) {
            var roomId = visit.roomId, entryTime = visit.entryTime, exitTime = visit.exitTime;
            if (!roomLog[roomId]) {
                roomLog[roomId] = {
                    time: exitTime - entryTime,
                    visits: 1
                };
            }
            else {
                roomLog[roomId].time += exitTime - entryTime;
                roomLog[roomId].visits++;
            }
        });
    });
    Object.keys(roomLog).forEach(function (room) {
        var _a = roomLog[room], time = _a.time, visits = _a.visits;
        var avgTime = Math.ceil(time / visits);
        console.log("Room " + room + ", " + avgTime + " minute average visit, " + visits + " visitor(s) total");
    });
};
console.log(footTraffic([
    [0, 0, "I", 540],
    [1, 0, "I", 540],
    [0, 0, "O", 560],
    [1, 0, "O", 560],
])); // Room 0, 20 minute average visit, 2 visitor(s) total
console.log(footTraffic([[0, 11, "I", 347],
    [1, 13, "I", 307],
    [2, 15, "I", 334],
    [3, 6, "I", 334],
    [4, 9, "I", 334],
    [5, 2, "I", 334],
    [6, 2, "I", 334],
    [7, 11, "I", 334],
    [8, 1, "I", 334],
    [0, 11, "O", 376],
    [1, 13, "O", 321],
    [2, 15, "O", 389],
    [3, 6, "O", 412],
    [4, 9, "O", 418],
    [5, 2, "O", 414],
    [6, 2, "O", 349],
    [7, 11, "O", 418],
    [8, 1, "O", 418],
    [0, 12, "I", 437],
    [1, 28, "I", 343],
    [2, 32, "I", 408],
    [3, 15, "I", 458],
    [4, 18, "I", 424],
    [5, 26, "I", 442],
    [6, 7, "I", 435],
    [7, 19, "I", 456],
    [8, 19, "I", 450],
    [0, 12, "O", 455],
    [1, 28, "O", 374],
    [2, 32, "O", 495],
    [3, 15, "O", 462],
    [4, 18, "O", 500],
    [5, 26, "O", 479],
    [6, 7, "O", 493],
    [7, 19, "O", 471],
    [8, 19, "O", 458]]));
// Room 1, 85 minute average visit, 1 visitor total
// Room 2, 48 minute average visit, 2 visitors total
// Room 6, 79 minute average visit, 1 visitor total
// Room 7, 59 minute average visit, 1 visitor total
// Room 9, 85 minute average visit, 1 visitor total
// Room 11, 57 minute average visit, 2 visitors total
// Room 12, 19 minute average visit, 1 visitor total
// Room 13, 15 minute average visit, 1 visitor total
// Room 15, 30 minute average visit, 2 visitors total
// Room 18, 77 minute average visit, 1 visitor total
// Room 19, 12 minute average visit, 2 visitors total
// Room 26, 38 minute average visit, 1 visitor total
// Room 28, 32 minute average visit, 1 visitor total
// Room 32, 88 minute average visit, 1 visitor total
