import * as net from "net";
import { v4 as uuid } from "uuid";

interface IIRCOptions {
	channel: string;
	host: string;
	port: number;
	nickname: string;
	username: string;
	realname: string;
}

const cleanUUID = () => uuid().replace(/[-\d]/g, "");

const irc = ({
	channel,
	host,
	nickname,
	port,
	realname,
	username,
}: IIRCOptions) => {
	const client = net.createConnection({ host, port }, () => {
		console.log("Connected");
		client.write(`NICK ${nickname}\r\n`);
		client.write(`USER ${username} 0 * :${realname}\r\n`);
		client.write(`JOIN ${channel}\r\n`);
	});
	client.on("data", data => {
		const receivedData = data.toString();
		console.log(receivedData);
		if (receivedData.includes("PING :")) {
			client.write(receivedData.replace("PING", "PONG"));
			console.log("Sent PONG in response to PING");
		}
	});
	client.on("close", () => {
		console.log("Disconnected");
	});
};

irc({
	channel: "#reddit-dailyprogrammer",
	host: "chat.freenode.net",
	nickname: cleanUUID(),
	port: 6667,
	realname: cleanUUID(),
	username: cleanUUID(),
});
