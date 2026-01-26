/**
 * Given two arrays, return their intersection.
 */

let a = [1,2,2,1];
let b = [2,2];

function intersection(a, b) {
    const setB = new Set(b);
    const result = new Set();

    for (let item of a) {
        if (setB.has(item)) {
            result.add(item);
        }
    }

    return Array.from(result);
}


console.log(intersection(a,b))