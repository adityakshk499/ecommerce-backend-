const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRoute = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use("/api/user", authRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    console.log(`listening on port http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
