const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const morgan = require("morgan"); // this used know the http request coming from the frontend It can be used to log requests, errors, and more to the console.
const mongoose = require("mongoose");
const port = 3000;
const api = process.env.API_URL;

// middlewer
app.use(bodyParser.json());
app.use(morgan("tiny")); // this will log in server that which request is coming

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: "$#293282",
    name: "phone",
    Image: "/Images/phone.png",
  };
  res.send(product);
});
app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
