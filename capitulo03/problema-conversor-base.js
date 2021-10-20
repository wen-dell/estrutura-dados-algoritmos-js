let Stack = (function () {
    class Stack {

        constructor() {
            this.items = [];
        }

        push(element) {
            this.items.push(element);
        }

        pop() {
            return this.items.pop();
        }

        peek() {
            return this.items[this.items.length - 1];
        }

        isEmpty() {
            return this.items.length === 0;
        }

        size() {
            return this.items.length;
        }

        clear() {
            this.items = [];
        }

        print() {
            console.log(this.items.toString());
        }
    }
    return Stack;
})();

const baseConverter = (decNumber, base) => {
    let remStack = new Stack();
    let rem;
    let baseString = '';
    let digits = '0123456789ABCDEF';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
};

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));