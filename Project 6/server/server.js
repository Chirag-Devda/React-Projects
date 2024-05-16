const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = 3000;
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

// Midelware
dotenv.config();
app.use(bodyParser.json());

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "Contact-App";
client.connect();
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("Contacts");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});
app.post("/", async (req, res) => {
  const newContact = req.body;
  const db = client.db(dbName);
  const collection = db.collection("Contacts");
  const insertResult = await collection.insertOne(newContact);
  res.send(newContact);
});
app.delete("/", async (req, res) => {
  const deleteid = req.body;
  const db = client.db(dbName);
  const collection = db.collection("Contacts");
  const deleteResult = await collection.deleteOne(deleteid);
  res.send(deleteResult);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
