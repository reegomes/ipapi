const express = require('express');
const app = express();
var http = require("http");

// app.get('/', (req, res) => {
//   const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
//   res.send(ip);
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

http.createServer(function(req, res) {
  // Homepage
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the homepage!");
  }

  // About page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the about page!");
  }

  // 404'd!
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }
}).listen(1337, "localhost");