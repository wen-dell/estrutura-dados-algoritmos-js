let friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 },
];

const comparePerson = (a, b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
};

console.log(friends.sort(comparePerson));

let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort());

const compareLowerString = (a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
};

console.log(names.sort(compareLowerString));

let names2 = ['Maeve', 'Maève'];

const compareLocal = (a, b) => {
    return a.localeCompare(b);
};

console.log(names2.sort(compareLocal));