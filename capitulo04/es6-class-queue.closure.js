let Queue = (function () {
    class Queue {

        constructor() {
            this.items = [];
        }

        enqueue(element) {
            this.items.push(element);
        }

        dequeue() {
            return this.items.shift();
        }

        front() {
            return this.items[0];
        }

        isEmpty() {
            return this.items.length === 0;
        }

        size() {
            return this.items.length;
        }

        print() {
            console.log(this.items.toString());
        }

    }

    return Queue;
})();

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();

