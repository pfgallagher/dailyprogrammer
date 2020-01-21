var readline = require("readline");
var exec = require("child_process").exec;
var checkLogThroughput = function (seconds) {
    var count = 0;
    var logger = exec("node easy-120-logger.js");
    var rl = readline.createInterface({ input: logger.stdout });
    rl.on("line", function () {
        count++;
    });
    setInterval(function () {
        console.log("Throughput: " + count / seconds + "/s");
        count = 0;
    }, seconds * 1000);
};
checkLogThroughput(5);
