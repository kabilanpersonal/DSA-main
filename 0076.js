const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  res.end("Hello World");
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
