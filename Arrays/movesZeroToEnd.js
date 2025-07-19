let arr= [0,2,1,0,2,1,2,4,0,3]

let nonZeros= arr.filter(i=> i!==0)
let zeros = arr.filter(i=> i===0)
console.log("Non Zeors",[...nonZeros, ...zeros])