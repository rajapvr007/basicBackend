require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send(" <h1>Youtube main page</h1> ");
});
app.get("/twitter", (req, res) => {
  res.send("This page is releated to twitter");
});

app.listen(process.env.PORT, () => {
  console.log(`Listing at port ${port}`);
});
