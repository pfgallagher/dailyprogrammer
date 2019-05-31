// tslint:disable: max-classes-per-file

interface INode {
	name: string;
	weight: number;
}

interface IAdjacencyList {
	[name: string]: INode[];
}

interface ITimes {
	[name: string]: number;
}

interface IBacktrace {
	[name: string]: string;
}

class PriorityQueue {
	public collection: Array<[string, number]> = [];

	public enqueue(element: [string, number]) {
		this.collection.push(element);
		this.collection.sort((a, b) => a[1] - b[1]);
	}

	public dequeue(): any {
		const dequeuedValue = this.collection.shift();
		if (dequeuedValue) {
			return dequeuedValue;
		}
	}
}

class Graph {
	public nodes: Array<INode["name"]> = [];
	public adjacencyList: IAdjacencyList = {};

	public addNode(node: INode["name"]) {
		this.nodes.push(node);
		this.adjacencyList[node] = [];
	}

	public addEdge(
		node1: INode["name"],
		node2: INode["name"],
		weight: INode["weight"],
	) {
		this.adjacencyList[node1].push({ name: node2, weight });
		this.adjacencyList[node2].push({ name: node1, weight });
	}

	public findPath(startNode: INode["name"], endNode: INode["name"]) {
		const times: ITimes = {};
		const backtrace: IBacktrace = {};
		const pq = new PriorityQueue();

		this.nodes.forEach(node => {
			times[node] = Infinity;
		});
		times[startNode] = 0;

		pq.enqueue([startNode, 0]);

		while (pq.collection.length) {
			const shortestStep = pq.dequeue();
			const currentNode = shortestStep[0];

			this.adjacencyList[currentNode].forEach((neighbor: INode) => {
				const time = times[currentNode] + neighbor.weight;
				if (time < times[neighbor.name]) {
					times[neighbor.name] = time;
					backtrace[neighbor.name] = currentNode;
					pq.enqueue([neighbor.name, time]);
				}
			});
		}

		const path = [endNode];
		let last = endNode;

		while (last !== startNode) {
			path.unshift(backtrace[last]);
			last = backtrace[last];
		}
		return `Time: ${times[endNode]}; Path: ${path.join(" -> ")}.`;
	}
}

let map = new Graph();
map.addNode("A");
map.addNode("B");
map.addNode("C");
map.addNode("D");
map.addNode("E");
map.addNode("F");

map.addEdge("A", "D", 7);
map.addEdge("A", "B", 8);
map.addEdge("A", "C", 3);
map.addEdge("B", "C", 5);
map.addEdge("B", "E", 10);
map.addEdge("C", "D", 4);
map.addEdge("C", "F", 8);
map.addEdge("D", "F", 7);
map.addEdge("E", "F", 6);

console.log(map.findPath("A", "E"));
