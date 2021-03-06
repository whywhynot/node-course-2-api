// const MongoClient = require("mongodb").MongoClient;

// var user = { name: "andrew", age: 25 };
// var { name } = user;
// console.log("name");
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("Todoapp");

    db.collection("Todos")
      .find({ _id: new ObjectID("5b1f3233bcc4cb06b85b1463") })
      .toArray()
      .then(
        docs => {
          console.log("Todos");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to retrieve documents", err);
        }
      );

    // client.close();
  }
);
