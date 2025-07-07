let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };
let obj3 = { a: 1, b: 3 };

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true
console.log(JSON.stringify(obj1) === JSON.stringify(obj3)); // false
