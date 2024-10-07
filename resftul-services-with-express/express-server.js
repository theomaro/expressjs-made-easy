// load an express module in your app
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// define a new routes/endpoints
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/users", (req, res) => {
  res.send([
    { id: 1, uname: "josMe" },
    { id: 2, uname: "amJ" },
    { id: 3, uname: "Theo" },
  ]);
});

// get route parameter
app.get("/api/users/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});

// get query string parameters
app.get("/api/customers/:year/:month", (req, res) => {
  res.send(req.query);
});

// listen at a given port
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}...`);
});
