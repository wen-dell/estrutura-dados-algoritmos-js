function Dictionary() {
    let items = {};

    this.set = function(key, value) {};

    this.delete = function(key) {};

    this.has = function(key) {
        return key in items;
    };

    this.get = function(key) {};

    this.clear = function() {};

    this.size = function() {};

    this.keys = function() {};

    this.values = function() {};
}