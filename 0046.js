const obj1 = {
    a: 1,
    b: 2,
    c:3
}
const obj2 = {
  a: 2,
  b: 4,
  c: 6,
};

console.log({ ...obj1, ...obj2 })
console.log(Object.assign({}, obj1, obj2));