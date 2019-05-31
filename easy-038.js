// tslint:disable: max-classes-per-file
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.collection = [];
    }
    PriorityQueue.prototype.enqueue = function (element) {
        this.collection.push(element);
        this.collection.sort(function (a, b) { return a[1] - b[1]; });
    };
    PriorityQueue.prototype.dequeue = function () {
        var dequeuedValue = this.collection.shift();
        if (dequeuedValue) {
            return dequeuedValue;
        }
    };
    return PriorityQueue;
}());
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodes = [];
        this.adjacencyList = {};
    }
    Graph.prototype.addNode = function (node) {
        this.nodes.push(node);
        this.adjacencyList[node] = [];
    };
    Graph.prototype.addEdge = function (node1, node2, weight) {
        this.adjacencyList[node1].push({ name: node2, weight: weight });
        this.adjacencyList[node2].push({ name: node1, weight: weight });
    };
    Graph.prototype.findPath = function (startNode, endNode) {
        var times = {};
        var backtrace = {};
        var pq = new PriorityQueue();
        this.nodes.forEach(function (node) {
            times[node] = Infinity;
        });
        times[startNode] = 0;
        pq.enqueue([startNode, 0]);
        var _loop_1 = function () {
            var shortestStep = pq.dequeue();
            var currentNode = shortestStep[0];
            this_1.adjacencyList[currentNode].forEach(function (neighbor) {
                var time = times[currentNode] + neighbor.weight;
                if (time < times[neighbor.name]) {
                    times[neighbor.name] = time;
                    backtrace[neighbor.name] = currentNode;
                    pq.enqueue([neighbor.name, time]);
                }
            });
        };
        var this_1 = this;
        while (pq.collection.length) {
            _loop_1();
        }
        var path = [endNode];
        var last = endNode;
        while (last !== startNode) {
            path.unshift(backtrace[last]);
            last = backtrace[last];
        }
        return "Time: " + times[endNode] + "; Path: " + path.join(" -> ") + ".";
    };
    return Graph;
}());
var map = new Graph();
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
