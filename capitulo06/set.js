function Set() {

    let items = {};

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    this.delete = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.has = function(value) {
        return items.hasOwnProperty(value);
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        return Object.keys(items).length;
    };

    this.values = function() {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };

}

let set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());
set.delete(1);
console.log(set.values());
set.delete(2);
console.log(set.values());