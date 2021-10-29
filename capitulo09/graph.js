function Stack() {
    let items = [];
    
    this.push = function(element) {
        items.push(element);
    };

    this.pop = function() {
        return items.pop();
    };

    this.peek = function() {
        return items[items.length - 1];
    };

    this.isEmpty = function() {
        return items.length === 0;
    };

    this.size = function() {
        return items.length;
    };

    this.clear = function() {
        items = [];
    };

    this.print = function() {
        console.log(items.toString()); 
    };
}

function Queue() {
    let items = [];

    this.enqueue = function(element) {
        items.push(element);
    };

    this.dequeue = function() {
        return items.shift();
    };

    this.front = function() {
        return items[0];
    };

    this.isEmpty = function() {
        return items.length === 0;
    };

    this.size = function() {
        return items.length;
    };

    this.print = function() {
        console.log(items.toString());
    };

}

function Dictionary() {
    
    let items = {};

    this.set = function(key, value) {
        items[key] = value;
    };

    this.delete = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.has = function(key) {
        return key in items;
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.getItems = function() {
        return items;
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        return Object.keys(items).length;
    };

    this.keys = function() {
        return Object.keys(items);
    };

    this.values = function() {
        let values = [];
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

}

function Graph() {
    let vertices = [];
    let adjList = new Dictionary();
    
    let initializeColor = function() {
        let color = [];
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };

    let dfsVisit = function(u, color, callback) {
        color[u] = 'grey';
        if (callback) {
            callback(u);
        }
        let neighbors = adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            let w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }
        color[u] = 'black';
    };

    this.bfs = function(v, callback) {
        let color = initializeColor();
        let queue = new Queue();
        queue.enqueue(v);

        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    };

    this.BFS = function(v) {
        let color = initializeColor();
        let queue = new Queue();
        let d = [];
        let pred = [];
        queue.enqueue(v);

        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            let u = queue.dequeue();
            let neighbors = adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                let w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return {
            distances: d,
            predecessors: pred
        };
    };

    this.dfs = function(callback) {
        let color = initializeColor();

        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    };

    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function(v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    this.toString = function() {
        let s = '';
        for (let i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> ';
            let neighbors = adjList.get(vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };

}

function printNode(value) {
    console.log('Visited vertex: ' + value);
}

let graph = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

graph.bfs(myVertices[0], printNode);

let shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);

graph.dfs(printNode);