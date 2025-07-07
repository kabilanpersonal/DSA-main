//shallow copy

const obj = {
    name: "kannan",
    address: {
        no:15
    }
}

let res = { ...obj };
console.log(res);

res.name = "divi";
res.address.no = 16;
console.log(res);   //copied obj
console.log(obj);   //nested obj affetected


//deep copy

const obj1 = {
  name: "kannan",
  address: {
    no: 15,
  },
};

let ress = JSON.parse(JSON.stringify(obj1));
console.log(ress);

console.log(obj1)