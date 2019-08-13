var sleepSort = function (numArr) {
    numArr.forEach(function (num) {
        return setTimeout(function () {
            console.log(num);
        }, num);
    });
};
sleepSort([3, 1, 4, 1, 5, 9]);
