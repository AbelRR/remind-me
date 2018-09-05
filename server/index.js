const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} request recieved at ${req.url}`);
  next();
})

app.listen(3000, () => {
  console.log("Listening at port 3000")
})