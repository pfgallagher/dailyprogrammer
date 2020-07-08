import * as net from "net";

class Server {
	private server: net.Server;
	private connections: Set<net.Socket> = new Set();
	private usernameMap: Map<net.Socket, string> = new Map();

	constructor() {
		this.server = net.createServer(connection => {
			this.connections.add(connection);
			console.log("client connected");

			connection.on("end", () => {
				this.connections.delete(connection);
				console.log("client disconnected");
			});

			connection.on("data", data => {
				const message = data.toString();
				if (message.startsWith("username:")) {
					this.setUsername(message, connection);
				} else {
					this.clientMessage(message, connection);
				}
			});
		});

		this.server.listen({ port: 1337 }, () => {
			console.log("server started on port 1337");
		});

		setInterval(() => {
			this.broadcast("heartbeat\n");
			console.log("heartbeat");
		}, 20000);
	}

	private setUsername = (message: string, sender: net.Socket) => {
		const username = message.slice(9, -2);
		this.usernameMap.set(sender, username);
		console.log(`client set username to ${username}`);
	};

	private clientMessage = (message: string, sender: net.Socket) => {
		const messageToSend = this.usernameMap.has(sender)
			? `${this.usernameMap.get(sender)}: ${message}`
			: message;
		this.connections.forEach(connection => {
			if (connection !== sender) {
				connection.write(messageToSend);
			}
		});
		console.log(messageToSend);
	};

	private broadcast = (message: string) => {
		this.connections.forEach(connection => {
			connection.write(message);
		});
	};
}

const test = new Server();
