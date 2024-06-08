const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fakebase = require("fakebase");

const app = express();
const port = 4201;

app.use(cors());
app.use(bodyParser.json());

const db = new fakebase.Database("./data/");
const Opinion = db.table("opinions");

app.post("/opinion", async (req, res) => {
  const { name, rate, content } = req.body;

  await Opinion.create({ name, rate, content });

  res.status(200).send({ message: "Data received successfully" });
});

app.get("/opinion", async (req, res) => {
  const result = await Opinion.findAll();

  res.status(200).send(result);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
