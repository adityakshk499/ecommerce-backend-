const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, async () => {
  try {
  await dbConnect(process.env.MONGO_URI);
    console.log(`listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
