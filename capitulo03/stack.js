function Stack() {
    let items = [];
    
    this.push = function(element) {
        items.push(element);
    };

    this.pop = function() {
        return items.pop();
    };
}