console.log("start");


setTimeout(() => {
    console.log("timeout");
}, 0);

setImmediate(() => {
    console.log("setimmediate");
})

process.nextTick(() => {
  console.log("nexttick");
});

Promise.resolve().then((msg) => console.log("promoses"))

console.log("end");
