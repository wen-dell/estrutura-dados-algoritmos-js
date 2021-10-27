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

    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function(v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

}