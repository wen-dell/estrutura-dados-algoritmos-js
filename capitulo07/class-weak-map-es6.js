let map = new WeakMap();

let ob1 = {name: 'Gandalf'};
let ob2 = {name: 'John'};
let ob3 = {name: 'Tyrion'};

map.set(ob1, 'gandalf@email.com');
map.set(ob2, 'johnsnow@email.com');
map.set(ob3, 'tyrion@email.com');

console.log(map.has(ob1));
console.log(map.get(ob3));
map.delete(ob2);