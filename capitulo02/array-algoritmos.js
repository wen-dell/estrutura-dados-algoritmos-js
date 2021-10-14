let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Adicionar no final
numbers[numbers.length] = 10;

// Adicionar no começo
for (let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i-1];
}
numbers[0] = -1;

// Removendo do começo
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i+1]
}