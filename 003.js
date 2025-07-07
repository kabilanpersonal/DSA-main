//max value in array and object
const arr1 = [1, 2, 3, 4, 5];
console.log(Math.max(...arr1))

const obj1 = {
    a: 1,
    b: 2,
    c:3
}
console.log(Math.max(...Object.values(obj1)))