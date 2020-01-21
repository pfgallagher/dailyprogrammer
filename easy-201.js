var millisecondsToDays = function (input) {
    return Math.round(input / 1000 / 60 / 60 / 24);
};
var numberOfDaysFromToday = function (year, month, date) {
    var today = new Date();
    var targetDate = new Date(year, month - 1, date);
    var duration = millisecondsToDays(targetDate.getTime() - today.getTime());
    return duration + " days from " + today.toDateString() + " to " + targetDate.toDateString();
};
console.log(numberOfDaysFromToday(2020, 7, 4));
// 165 days from Tue Jan 21 2020 to Sat Jul 04 2020
console.log(numberOfDaysFromToday(2020, 12, 24));
// 338 days from Tue Jan 21 2020 to Thu Dec 24 2020
console.log(numberOfDaysFromToday(2021, 1, 1));
// 346 days from Tue Jan 21 2020 to Fri Jan 01 2021
console.log(numberOfDaysFromToday(2021, 2, 9));
// 385 days from Tue Jan 21 2020 to Tue Feb 09 2021
console.log(numberOfDaysFromToday(2025, 1, 1));
// 1807 days from Tue Jan 21 2020 to Wed Jan 01 2025
console.log(numberOfDaysFromToday(2025, 2, 9));
// 1846 days from Tue Jan 21 2020 to Sun Feb 09 2025
console.log(numberOfDaysFromToday(2025, 3, 1));
// 1866 days from Tue Jan 21 2020 to Sat Mar 01 2025
console.log(numberOfDaysFromToday(3020, 2, 9));
// 365261 days from Tue Jan 21 2020 to Wed Feb 09 3020
