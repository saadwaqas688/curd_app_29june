const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // log
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./database/connection");
const app = express();
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
connectDB();
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("curd application");
});
app.use("/", require("./router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
