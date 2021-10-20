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

const divideBy2 = (decNumber) => {
    let remStack = new Stack();
    let rem;
    let binaryString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
};

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));