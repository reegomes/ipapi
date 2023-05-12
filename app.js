const express = require('express');
const app = express();

app.get('/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(req)
  console.log(res)
  res.send(ip);
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});