const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("this is a user page!");
  res.send("<h1>this is a user page!</h1>");
  next();
});

app.use("/", (req, res, next) => {
  console.log("this is a home page!");
  res.send("<h1>this is a home page!</h1>");
  next();
});

app.listen(3000);
