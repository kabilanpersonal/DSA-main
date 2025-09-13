//remove falsy values
let a= [1,2,0,0n,null,undefined,4,5,[],{}]
let result = a.filter((item)=> item)
console.log(result) //[ 1, 2, 4, 5, [], {} ]