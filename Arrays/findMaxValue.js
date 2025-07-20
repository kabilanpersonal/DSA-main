//max value in array and object
const arr1 = [1, 2, 3, 4, 5];
console.log(Math.max(...arr1))

//using reduce
let max = arr1.reduce((a,b)=> {
  return a>b ? a: b
})
console.log(max)

const obj1 = {
    a: 1,
    b: 2,
    c:3
}
console.log(Math.max(...Object.values(obj1)))