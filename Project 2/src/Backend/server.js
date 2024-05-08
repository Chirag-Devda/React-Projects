import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  res.send("Hello World!");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
