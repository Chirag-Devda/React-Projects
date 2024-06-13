const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());

// Connection URL
const url = process.env.MONGODB_URL;
console.log(process.env.MONGODB_URL);

const client = new MongoClient(url);

// Database Name
const dbName = "LockVault";
client.connect();

app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// save password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
});

// Delete password by id
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
