const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.P;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running");
});
