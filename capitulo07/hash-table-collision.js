function HashTable() {

    let table = [];

    let loseloseHashCode = function(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    this.put = function(key, value) {
        let position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    };

    this.get = function(key) {
        return table[loseloseHashCode(key)];
    };

    this.print = function() {
        for (let i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };

}

let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com'); 

