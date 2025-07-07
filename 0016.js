//comparing objects

import _ from 'lodash';

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

let res = JSON.stringify(obj1);
let res1 = JSON.stringify(obj2);
console.log(res===res1);


//using lodash
console.log(_.isEqual(obj1, obj2) );


//Array
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
//1
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true
//2
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

console.log(arraysEqual(arr1, arr2)); // true

