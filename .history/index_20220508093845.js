const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yhskc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.get("/", (req, res) => {
  res.send("server is running");
});
app.get("/rubama", (req, res) => {
  res.send("I love you rubama");
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
async function run() {
  try {
    await client.connect();
    const usersCollection = client
      .db("best-motors-warehouse-app")
      .collection("Warehouse-item");
    app.get("items"async());
    // console.log(usersCollection);
    // const user = { name: "rubama", email: "Iloverubama@gmail.com" };
    // const result = await usersCollection.insertOne(user);
    // console.log(`user inserted with id:${result.insertedId}`);
  } finally {
  }
}
run().catch(console.dir);
