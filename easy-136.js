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
var gradeAssignments = function (gradingInput) {
    var _a = __read(gradingInput.split("\n")), classInfo = _a[0], students = _a.slice(1);
    var _b = __read(classInfo
        .split(" ")
        .map(function (num) { return parseInt(num, 10); }), 2), numStudents = _b[0], numAssignments = _b[1];
    var studentAverages = students
        .filter(function (student) { return student; })
        .map(function (student) {
        var _a = __read(student.split(" ")), name = _a[0], scores = _a.slice(1);
        var studentAverage = scores.reduce(function (a, c) { return a + parseInt(c, 10); }, 0) / numAssignments;
        return [name, studentAverage];
    });
    var classAverage = studentAverages.reduce(function (a, c) { return a + c[1]; }, 0) / numStudents;
    studentAverages.unshift(["", classAverage]);
    studentAverages.forEach(function (studentAverage) {
        var _a = __read(studentAverage, 2), student = _a[0], average = _a[1];
        console.log(student, average.toFixed(2));
    });
};
console.log(gradeAssignments("3 5\nJON 19 14 15 15 16\nJEREMY 15 11 10 15 16\nJESSE 19 17 20 19 18"));
// 15.93
// JON 15.80
// JEREMY 13.40
// JESSE 18.60
console.log(gradeAssignments("10 10\nABIGAIL 11 3 5 20 4 2 8 17 4 5\nALEXANDER 2 12 20 0 6 10 3 4 9 7\nAVA 11 15 2 19 14 5 16 18 15 19\nETHAN 6 12 0 0 5 11 0 11 12 15\nISABELLA 16 0 10 7 20 20 7 2 0 1\nJACOB 2 14 17 7 1 11 16 14 14 7\nJAYDEN 10 10 3 16 15 16 8 17 15 3\nMADISON 10 11 19 4 12 15 7 4 18 13\nSOPHIA 5 17 14 7 1 17 18 8 1 2\nWILLIAM 12 12 19 9 4 3 0 4 13 14\n"));
// 9.50
// ABIGAIL 7.90
// ALEXANDER 7.30
// AVA 13.40
// ETHAN 7.20
// ISABELLA 8.30
// JACOB 10.30
// JAYDEN 11.30
// MADISON 11.30
// SOPHIA 9.00
// WILLIAM 9.00
