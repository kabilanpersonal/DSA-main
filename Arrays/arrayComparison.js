const _ = require('lodash')
let a= [1,2,3,4]
let b= [1,2,3,4]
let c= [1,2,3,4,null]
let d= [1,2,3,4,undefined]

const arrayCompare = function(a,b){
        return (a.length === b.length) && a.every((val, i) => val === b[i]);
      };
      

console.log(JSON.stringify(a)===JSON.stringify(b))//true
console.log(JSON.stringify(c)===JSON.stringify(d))// true
console.log(arrayCompare(c,d))//false

//Deep cloning Array
let clone = _.cloneDeep(d)
console.log("Cloned :",clone)