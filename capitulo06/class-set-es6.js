let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

let unionAb = new Set();
for (let x of setA) unionAb.add(x);
for (let x of setB) unionAb.add(x);

let intersection = function(setA, setB) {
    let intersectionSet = new Set();
    for (let x of setA) {
        if (setB.has(x)) {
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
};

let intersectionAB = intersection(setA, setB);

let difference = function(setA, setB) {
    let differenceSet = new Set();
    for (let x of setA) {
        if (!setB.has(x)) {
            differenceSet.add(x);
        }
    }
    return differenceSet;
};

let differenceAB = difference(setA, setB);