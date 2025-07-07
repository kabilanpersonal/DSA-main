let promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "First")
);
let promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "Second")
);

Promise.race([promise1, promise2])
  .then((result) => console.log(result)) 
  .catch((error) => console.log(error));
