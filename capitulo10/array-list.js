function ArrayList() {
    let array = [];

    let swap = function(array, index1, index2) {
        let aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    let mergeSortRec = function(array) {
        let length = array.length;
        if (length === 1) {
            return array;
        }
        let mid = Math.floor(length / 2);
        let left = array.slice(0, mid);
        let right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    let merge = function(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
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

    this.selectionSort = function() {
        let length = array.length;
        let indexMin;
        for (let i = 0; i < length - 1; i++) {
            indexMin = i;
            for (let j = i; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }               
            }
            if (i !== indexMin) {
                swap(array, i, indexMin);
            }    
        }
    };

    this.insertionSort = function() {
        let length = array.length;
        let j;
        let temp;
        for (let i = 1; i < length; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j-1] > temp) {
                array[j] = array[j-1];
                j--;
            }
            array[j] = temp;
        }
    };

    this.mergeSort = function() {
        array = mergeSortRec(array);
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

array = createNonSortedArray(5);
console.log(array.toString());
array.selectionSort();
console.log(array.toString());