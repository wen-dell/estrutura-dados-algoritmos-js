let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries();
console.log(aEntries.next().value); // [0, 1]
console.log(aEntries.next().value); // [1, 2]
console.log(aEntries.next().value); // [2, 2]

let aKeys = numbers.keys();
console.log(aKeys.next());
console.log(aKeys.next())
console.log(aKeys.next())

let aValues = numbers.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());