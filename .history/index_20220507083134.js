const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://devsajid:9SOHkyNyLYYAmanF@cluster0.yhskc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.get("/", (req, res) => {
  res.send("server is running");
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
async function run() {}
run().catch(c);
