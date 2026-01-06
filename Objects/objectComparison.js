const _ = require('lodash');
const obj1 = { name: "Alice", age: 25 };
const obj2 = { name: "Alice", age: 25 };
const obj3 = { name: "Alice1", age: 25 };
const obj4 = { name: "Kabilan", age: 22  };

//Shallow Comparison
const funcCheck=(a,b)=>{
    const keyA= Object.keys(a)
    const keyB =Object.keys(b)
    return( (keyA.length=== keyB.length) && (keyA.every(key=> a[key]=== b[key])))
}
console.log(funcCheck(obj1,obj2))//true
console.log(funcCheck(obj2,obj3))//false

//Deep Comparison
console.log(_.isEqual(obj1, obj2)); // true