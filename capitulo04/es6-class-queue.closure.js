let queue = (function () {
    class Queue {

        constructor() {
            this.items = [];
        }

        enqueue(element) {
            items.push(element);
        }

        dequeue() {
            return items.shift();
        }

        front() {
            return items[0];
        }

        isEmpty() {
            return items.length === 0;
        }

        size() {
            return items.length;
        }

        print() {
            console.log(items.toString());
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

