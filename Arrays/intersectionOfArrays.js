//intersection of Arrays
const a = [1, 2,4];
const b = [2, 3, 4];

let C=[];
b.forEach((val)=>{
    if(a.includes(val)) C.push(val)
})
console.log("Intersection :",C)

let d= a.filter((val)=> b.includes(val));
console.log(d)