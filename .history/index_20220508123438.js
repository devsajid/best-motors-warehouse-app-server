// const express = require("express");
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const cors = require("cors");
// const req = require("express/lib/request");
// const res = require("express/lib/response");
// require("dotenv").config();
// const port = process.env.PORT || 5000;
// const app = express();
// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yhskc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// app.get("/", (req, res) => {
//   res.send("server is running");
// });
// app.get("/mother", (req, res) => {
//   res.send("I love you mother");
// });
// app.listen(port, () => {
//   console.log("Listening to port", port);
// });
// async function run() {
//   try {
//     await client.connect();
//     const usersCollection = client
//       .db("best-motors-warehouse-app")
//       .collection("Warehouse-item");
//     app.get("/Warehouse-item", async (req, res) => {
//       const query = {};
//       const cursor = usersCollection.find(query);
//       const items = await cursor.toArray();
//       res.send(items);
//     });
//     // console.log(usersCollection);
//     // const user = { name: "mother", email: "Ilovemother@gmail.com" };
//     // const result = await usersCollection.insertOne(user);
//     // console.log(`user inserted with id:${result.insertedId}`);
//   } finally {
//   }
// }
// run().catch(console.dir);
const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vq4tb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yhskc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const inventoryCollection = client
      .db("best-motors-warehouse-app")
      .collection("Warehouse-item");
    console.log("Database Connect Hoise");

    app.get("/Warehouse-item", async (req, res) => {
      const query = {};
      const cursor = inventoryCollection.find(query);
      const items = await cursor.toArray();
      res.send(items);
    });
    app.get("/Warehouse-item/:id", async (req, res) => {
      co;
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello server ready ache !");
});

app.listen(port, () => {
  console.log(`listening  on port ${port}`);
});
