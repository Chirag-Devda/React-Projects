const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

// Midelware
dotenv.config();
const port = process.env.PORT;
console.log(port);
app.use(bodyParser.json());
app.use(cors());

// Connection URL
const url = process.env.MONGODB_URL;
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
  res.send({ success: true, result: insertResult });
});

app.delete("/", async (req, res) => {
  const deleteid = req.body;
  const db = client.db(dbName);
  const collection = db.collection("Contacts");
  const deleteResult = await collection.deleteOne(deleteid);
  res.send(deleteResult);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
