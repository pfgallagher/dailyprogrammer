"use strict";
exports.__esModule = true;
var net = require("net");
var uuid_1 = require("uuid");
var cleanUUID = function () { return uuid_1.v4().replace(/[-\d]/g, ""); };
var irc = function (_a) {
    var channel = _a.channel, host = _a.host, nickname = _a.nickname, port = _a.port, realname = _a.realname, username = _a.username;
    var client = net.createConnection({ host: host, port: port }, function () {
        console.log("Connected");
        client.write("NICK " + nickname + "\r\n");
        client.write("USER " + username + " 0 * :" + realname + "\r\n");
        client.write("JOIN " + channel + "\r\n");
    });
    client.on("data", function (data) {
        var receivedData = data.toString();
        console.log(receivedData);
        if (receivedData.includes("PING :")) {
            client.write(receivedData.replace("PING", "PONG"));
            console.log("Sent PONG in response to PING");
        }
    });
    client.on("close", function () {
        console.log("Disconnected");
    });
};
irc({
    channel: "#reddit-dailyprogrammer",
    host: "chat.freenode.net",
    nickname: cleanUUID(),
    port: 6667,
    realname: cleanUUID(),
    username: cleanUUID()
});
