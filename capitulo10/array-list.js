function ArrayList() {
    let array = [];

    let swap = function(array, index1, index2) {
        let aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    this.insert = function(item) {
        array.push(item);
    };

    this.toString = function() {
        return array.join();
    };

    this.bubbleSort = function() {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j+1]) {
                    swap(array, j, j+1);
                }
            }
        }
    };
}

function createNonSortedArray(size) {
    let array = new ArrayList();
    for (let i = size; i > 0; i--){
        array.insert(i);
    }
    return array;
}

let array = createNonSortedArray(5);
console.log(array.toString());
array.bubbleSort();
console.log(array.toString());