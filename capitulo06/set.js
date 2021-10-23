function Set() {
    let items = {};

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };
    
    this.delete = function(value) {};
    this.has = function(value) {
        return items.hasOwnProperty(value);
    };
    this.clear = function() {};
    this.size = function() {};
    this.values = function() {};

}