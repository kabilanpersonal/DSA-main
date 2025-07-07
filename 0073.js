//event emiiter

const eventemitter = require('events')

const emiiter = new eventemitter();

emiiter.on("greet", (name) => {
    console.log(`hello ${name}`);
})

emiiter.emit("greet", "kannan");