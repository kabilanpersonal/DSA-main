const obj = { a: 1, b: 2 };
const obj2 = { y: 20, z: 3 };


//Iteration
for(const key in obj){
    console.log(`Key : ${key} , Value: ${obj[key]}`);
}

// Obj to Array
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
console.log(Object.keys(obj));    // ['a', 'b']
console.log(Object.values(obj));  // [1, 2]

//Merge Obj
const merged = { ...obj, ...obj2 }; 
console.log(merged) //{ a: 1, b: 2, y: 20, z: 3 }

//Basics
let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x); //👉 Output: 2 -> Objects are assigned by reference, not copied.

// ***************************************************************************************************

let obj1 = { a: 1, b: { c: 2 } };
let obj3 = { ...obj1 };

obj3.b.c = 5;
console.log(obj1.b.c);// 👉 Output: 5 -> ✔ Spread creates a shallow copy, nested objects still share reference.

// ***************************************************************************************************

//✔ Objects are compared by reference, not value.
// console.log({} === {});  //false
console.log({} == {}); //false
let d = {};
let e = d;
console.log(d === e); //true

// ***************************************************************************************************

let f = {};
let g = {};
let h = {};

h[f] = 1; // h["[Object Object]"]
h[g] = 2; // h["[Object Object]"]
console.log(h[f]); //2 -> In JavaScript objects, Object keys are always strings (or symbols); JavaScript implicitly converts the key to a string.... Use Map to preserve object references.

// ***************************************************************************************************

let details = { name: "JS", 
            getName() { return this.name; } 
            }; 
let fn = details.getName; 
console.log(fn()); //undefined

//fix
let fn1 = obj.getName.bind(obj); // use bind method
let fn2 = () => obj.getName(); //use Arrow func

// ***************************************************************************************************





