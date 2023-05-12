const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send(ip);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});