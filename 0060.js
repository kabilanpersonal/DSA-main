//types promises
let promiseChain = new Promise((resolve, reject) => {
  resolve("Starting the process");
})
  .then((message) => {
    console.log(message); // Output: Starting the process
    return "Process Step 1";
  })
  .then((step) => {
    console.log(step); // Output: Process Step 1
    return "Process Step 2";
  })
  .then((step) => {
    console.log(step); // Output: Process Step 2
  });
