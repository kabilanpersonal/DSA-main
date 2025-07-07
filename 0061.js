//promises.all

//case 1
let promises1 = Promise.resolve("kannan");
let promises2 = Promise.resolve("divi");


Promise.all([promises1, promises2]).then((msg) => {
    console.log(msg);
    
}).catch((err) => { console.log(err) })

//case 2
let promises11 = Promise.resolve("kannan");
let promises21 = Promise.reject("divi");

Promise.all([promises11, promises21])
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

  