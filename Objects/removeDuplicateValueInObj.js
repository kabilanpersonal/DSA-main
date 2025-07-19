//Duplicate value in Object
let c = { a: 1, b: 2 ,c:1}
let values = Object.values(c);
const duplicate = values.filter((value,i,arr)=>arr.indexOf(value) !== i)
console.log("Duplicates",duplicate) //[1]
let removedDuplicate={}
for (const key in c){
    if(!duplicate.includes(c[key])){
        removedDuplicate[key]= c[key]
    }
}
console.log("Removed Duplicates",removedDuplicate)