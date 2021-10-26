function HashTable() {

    let table = [];

    let djb2 = function(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    this.put = function(key, value) {
        let position = djb2(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    this.remove = function(key) {
        table[djb2(key)] = undefined;
    };

    this.get = function(key) {
        return table[djb2(key)];
    };

}
