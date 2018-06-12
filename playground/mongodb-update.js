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
      .findOneAndUpdate(
        {
          _id: new ObjectID("5b1c7643f1a26ce461be5a67")
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
