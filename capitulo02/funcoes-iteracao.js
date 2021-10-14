let isEven = (x) => x % 2 == 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// determina se todos os elementos passam no teste
console.log(numbers.every(isEven));

// determina se pelo menos um elemento passa no teste
console.log(numbers.some(isEven));

numbers.forEach(x => console.log(x));

let newArray = numbers.map(x => x * 10);
console.log(newArray);

let even = numbers.filter(isEven);
console.log(even);

let total = numbers.reduce((previous, current, index) => previous + current);
console.log(total);

for (let n of numbers) {
    console.log((n % 2 == 0) ? 'even' : 'odd');
}
