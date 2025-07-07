//sum of all 
let f1 = [1, 2, 3, 4, 4];
let res = f1.reduce((sum, acc) => sum + acc, 0);
console.log(res);


let f2 = [
    {
        name: "kammam",
        price: 10,
    },
    {
        name: "kammam",
        price: 10,
    },
    {
        name: "kammam",
        price: 10,
    },
  
];
let res1 = f2.reduce((sum, acc) => sum + acc.price,0);
console.log(res1)

