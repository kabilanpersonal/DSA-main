console.log("start");

setTimeout(() => {
    console.log("timeout")
}, 0);

Promise.resolve().then(() => {
    console.log("promoses");
    
})

console.log("emd");

