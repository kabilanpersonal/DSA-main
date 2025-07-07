let promise1 = Promise.resolve(42);
let promise2 = Promise.reject("Error");

Promise.allSettled([promise1, promise2]).then((results) =>
    console.log(results)
).catch((err) => console.log(err));
