function Queue() {
    let items = [];

    this.enqueue = function(element) {
        items.push(element);
    };

    this.dequeue = function() {
        return items.shift();
    };
    

}