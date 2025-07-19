const obj = { a: 1, b: 2 };
const b = { y: 20, z: 3 };


//Iteration
for(const key in obj){
    console.log(`Key : ${key} , Value: ${obj[key]}`);
}

// Obj to Array
console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
console.log(Object.keys(obj));    // ['a', 'b']
console.log(Object.values(obj));  // [1, 2]

//Merge Obj
const merged = { ...obj, ...b }; 
console.log(merged) //{ a: 1, b: 2, y: 20, z: 3 }
